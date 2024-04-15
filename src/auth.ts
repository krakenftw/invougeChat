import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { DatabaseUser, Lucia } from "lucia";
import { prismaClient } from "./lib/db";
import { GitHub } from "arctic";

export const client = prismaClient;

export const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes: any) => {
    return {
      githubId: attributes.github_id,
      username: attributes.username,
    };
  },
});

export const github = new GitHub(
  process.env.GITHUB_CLIENT_ID!,
  process.env.GITHUB_CLIENT_SECRET!,
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}
interface DatabaseUserAttributes {
  github_id: number;
  username: string;
}
