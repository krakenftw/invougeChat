"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import UrlPicker from "@/components/agent/UrlPicker";

export default function AgentSetup() {
  const [urls, setUrls] = useState<string[]>([]);
  const [initUrl, setInitUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getLinks = async () => {
    setLoading(true);
    axios
      .post("/api/user/agent/fetchwebsitelink", { urls: [initUrl] })
      .then((res) => {
        console.log("Fetched Url");
        setUrls(res.data.links);
        console.log(res.data.links);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleCreateBot = () => {
    setLoading(true);
    axios.post("/api/user/agent/fetchwebsitelink", {});
  };

  return (
    <div className="flex w-screen">
      <div className="p-5 w-3/5 flex flex-col">
        <h1 className="text-2xl font-bold">Agent Setup</h1>
        <div className="flex items-center justify-center gap-4">
          <Input
            onChange={(e) => setInitUrl(e.target.value)}
            placeholder="Your Website"
            className="my-6"
          />
          <Button disabled={loading} onClick={getLinks}>
            Get Links
          </Button>
        </div>
        {urls && urls.length != 0 && (
          <UrlPicker
            urls={urls}
            loading={loading}
            handleCreateBot={handleCreateBot}
          />
        )}
      </div>
      <div className="flex w-2/5">.</div>
    </div>
  );
}
