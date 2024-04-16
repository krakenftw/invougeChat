import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { github, lucia } from "@/auth";
import { prismaClient } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state) {
    return NextResponse.json({ status: 400, error: "Internal Server Error" });
  }
  if (!code) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });
    const githubUser: any = await githubUserResponse.json();

    const githubuseremail = await fetch("https://api.github.com/user/emails", {
      headers: {
        authorization: `bearer ${tokens.accessToken}`,
      },
    });

    const emailContent = await githubuseremail.json();
    const primaryEmail = emailContent[0].email;

    const existingUser = await prismaClient.user.findFirst({
      where: { github_id: githubUser.id },
    });
    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {
        name: githubUser.name,
        email: primaryEmail,
      });
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }

    const uuid = await uuidv4();
    await prismaClient.user.create({
      data: {
        id: uuid,
        email: primaryEmail,
        name: githubUser.name,
        github_id: githubUser.id,
        username: githubUser.login,
        password: "",
        profile_picture: githubUser.avatar_url,
      },
    });

    const session = await lucia.createSession(uuid, {
      name: githubUser.name,
      email: primaryEmail,
    });
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    console.log(e);
    if (e instanceof OAuth2RequestError) {
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

interface GitHubUser {
  id: string;
  login: string;
}
