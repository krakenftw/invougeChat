"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";
import UrlPicker from "./agent/UrlPicker";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

export default function AgentSetupInteractive() {
  const { toast } = useToast();
  const router = useRouter();
  const [urls, setUrls] = useState<string[]>([]);
  const [initUrl, setInitUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [websiteName, setWebsiteName] = useState<string>("");

  const getLinks = async () => {
    setLoading(true);
    axios
      .post("/api/user/agent/fetchwebsitelink", { urls: [initUrl] })
      .then((res) => {
        setUrls(res.data.links);
        setWebsiteName(initUrl.split(".")[1]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleCreateBot = async () => {
    setLoading(true);
    const response = await axios.post("/api/newModel", {
      websites: urls,
      websiteName: websiteName,
    });
    if (response.data.error) {
      toast({ title: "An error occurred", description: response.data.error });
      return;
    } else {
      toast({ title: "Agent setup successfull." });
      router.push("/dashboard");
    }
  };

  return (
    <>
      <div className="flex md:items-center md:justify-start md:gap-4 flex-col md:flex-row w-full">
        <Input
          onChange={(e) => setInitUrl(e.target.value)}
          placeholder="Your Website"
          className="my-6 md:w-3/5"
        />
        <Button disabled={loading} onClick={getLinks}>
          Get Links
        </Button>
      </div>
      {urls && urls.length != 0 && (
        <div>
          <UrlPicker
            urls={urls}
            loading={loading}
            handleCreateBot={handleCreateBot}
            setWebsiteName={setWebsiteName}
            websiteName={websiteName}
          />
        </div>
      )}
    </>
  );
}
