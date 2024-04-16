"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Bot } from "@prisma/client";
import { Button } from "./ui/button";
import { handleUserSettingUpdate } from "@/actions/agent.controller";
import { ShadowInnerIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

export default function BotSettingsUpdate({ data }: { data: any }) {
  console.log(data);
  const [settings, setSettings] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prevSettings: Bot) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await handleUserSettingUpdate(settings);
    setLoading(false);
  };

  return (
    <div className="w-full">
      <form
        className="p-4 w-3/5 flex flex-col gap-6 border-[1px] border-border rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="items-center w-full flex flex-wrap gap-4">
          <div className="min-w-[300px]">
            <label htmlFor="chatBotTitle">Chat Bot Title:</label>
            <Input
              id="chatBotTitle"
              name="chatBotTitle"
              value={settings.chatBotTitle}
              onChange={handleChange}
            />
          </div>
          <div className="w-[200px]">
            <label htmlFor="widgetColor">Widget Color:</label>
            <Input
              type="color"
              id="widgetColor"
              name="widgetColor"
              value={settings.widgetColor}
              onChange={handleChange}
            />
          </div>
          <div className="w-3/4">
            <label htmlFor="welcomeMessage">Welcome Message:</label>
            <Input
              id="welcomeMessage"
              name="welcomeMessage"
              value={settings.welcomeMessage}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="widgetButtonPosition">
              Widget Button Position:
            </label>
            <Select
              defaultValue={settings.widgetButtonPosition}
              onValueChange={(d) => {
                setSettings({ ...settings, widgetButtonPosition: d });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="left or Right" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>{" "}
          <div>
            <label htmlFor="fontFamily">Font Family:</label>
            <Input
              id="fontFamily"
              name="fontFamily"
              value={settings.fontFamily}
              onChange={handleChange}
            />
          </div>
          <div className="w-3/4">
            <label htmlFor="fontUrl">Font URL:</label>
            <Input
              id="fontUrl"
              name="fontUrl"
              value={settings.fontUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="profileDescription">Profile Description:</label>
            <Input
              id="profileDescription"
              name="profileDescription"
              value={settings.profileDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="placeholder">Placeholder:</label>
            <Input
              id="placeholder"
              name="placeholder"
              value={settings.placeholder}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="style">Popup Style:</label>
            <Select
              defaultValue={settings.style}
              onValueChange={(d) => {
                setSettings({ ...settings, style: d });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="style" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="solid">Solid</SelectItem>
                  <SelectItem value="gradient">Gradient</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <label htmlFor="popupText">Popup Text:</label>
            <Input
              id="popupText"
              name="popupText"
              value={settings.popupText}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button className="max-w-40" type="submit">
          {loading ? (
            <ShadowInnerIcon className="animate-spin" />
          ) : (
            "Save Changes"
          )}
        </Button>
      </form>
    </div>
  );
}
