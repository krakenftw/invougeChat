"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export default function LinkToBot({ botCode }: { botCode: string }) {
  const { toast } = useToast();
  return (
    <div className="flex rounded-lg flex-col gap-4 border-[1px] border-border p-4">
      <h1>Add Bot to your website</h1>
      <div className="flex items-center gap-4">
        <Input
          disabled={true}
          value={botCode}
          className="p-6 font-mono text-xl"
        />
        <Button
          onClick={() => {
            navigator.clipboard.writeText(botCode);
            toast({ title: "Copied to clipboard" });
          }}
          className="rounded-lg p-5"
        >
          Copy
        </Button>
      </div>
    </div>
  );
}
