import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

function EachUrl({ url }: { url: string }) {
  const [text, setText] = useState(url);
  return (
    <div className="flex w-full items-center justify-between overflow-y-hidden overflow-x-scroll h-12 ">
      <Input onChange={(e) => setText(e.target.value)} value={text} />
      <Button className="hover:bg-transparent" variant="ghost">
        <Cross2Icon />
      </Button>
    </div>
  );
}

export default EachUrl;
