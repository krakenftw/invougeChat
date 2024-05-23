"use client";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" flex flex-grow items-center w-full">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
      />
      <div className="flex w-full lex-grow gap-8 flex-col justify-center items-center h-full">
        <Badge text="Personalised chatbot in minutes" />
        <h1 className="text-5xl font-bold text-primary tracking-wider">
          Invouge-Chat
        </h1>
        <h1 className="text-lg md:text-3xl w-4/5 md:w-1/2 text-muted-foreground text-center whitespace-break-spaces">
          Revolutionize Conversations with AI-Driven Chatbot Mastery: Precision
          through Data Training and Dynamic Features for Unparalleled
          Interaction.
        </h1>
        <div className="flex gap-6">
          <Button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="px-11 shadow-secondary shadow-lg text-md py-6"
          >
            Start Building
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              router.push("/dashboard");
            }}
            className="hover:bottom-4 px-11 shadow-secondary shadow-lg text-md py-6"
          >
            Try it
          </Button>
        </div>
      </div>
    </div>
  );
}
