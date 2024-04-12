"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" flex flex-grow items-center flex-col">
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="flex w-1/2 flex-grow gap-8 flex-col justify-center items-center h-full">
        <div className="rounded-full border-[1px] border-primary w-fit px-4 py-2 backdrop-blur bg-secondary/50 ">
          <p>Personalised chatbot in minutes</p>
        </div>
        <h1 className="text-4xl font-bold text-primary">Invouge Chat</h1>
        <h1 className="text-3xl font-semibold text-center whitespace-break-spaces">
          Revolutionize Conversations with AI-Driven Chatbot Mastery: Precision
          through Data Training and Dynamic Features for Unparalleled
          Interaction.
        </h1>
        <Button
          onClick={() => {
            router.push("/dashboard");
          }}
          className="px-6 text-md py-4"
        >
          Start Building
        </Button>
      </div>
    </div>
  );
}
