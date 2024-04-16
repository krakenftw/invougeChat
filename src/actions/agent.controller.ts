"use server";
import { prismaClient } from "@/lib/db";
import { Bot } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
export async function handleDatabaseUpdate(user: any, websiteName: string) {
  const agentId = uuidv4();

  const agentData = await prismaClient.agent.create({
    data: { id: agentId, userId: user.id, name: websiteName },
  });
  const botId = uuidv4();
  await prismaClient.bot.create({
    data: {
      userId: user.id,
      id: botId,
      chatBotTitle: data.chatBotTitle,
      welcomeMessage: data.welcomeMessage,
      widgetColor: data.widgetColor,
      collectVisitorInfo: data.collectVisitorInfo,
      widgetButtonPosition: data.widgetButtonPosition,
      convoStarters: data.convoStarters,
      fontFamily: data.fontFamily,
      fontUrl: data.fontUrl,
      profileDescription: data.profileDescription,
      placeholder: data.placeholder,
      style: data.style,
      showPopupText: data.showPopupText,
      popupText: data.popupText,
      expandByDefault: data.expandByDefault,
      removePoweredBy: data.removePoweredBy,
      chatIsLocked: data.chatIsLocked,
      typingMessage: data.typingMessage,
      agent: {
        connect: { id: agentData.id },
      },
    },
  });
  return botId;
}

const data = {
  chatBotTitle: "InvougeAI",
  welcomeMessage: "Welcome Gaurav 👋! How can we help you today?",
  widgetColor: "black",
  collectVisitorInfo: false,
  widgetButtonPosition: "right",
  convoStarters: [
    "Query about order ",
    "Need help with products.",
    "Somethign",
  ],
  fontFamily: "Poppins",
  fontUrl:
    "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Sixtyfour&display=swap')",
  profileDescription: "Howdy! 👋",
  placeholder: "Your Query",
  style: "solid",
  showPopupText: true,
  popupText: "Hello 👋! How may we help you?",
  expandByDefault: false,
  removePoweredBy: false,
  chatIsLocked: true,
  typingMessage: "Agent is typing.....",
};

export const handleUserSettingUpdate = async (newData: Bot) => {
  await prismaClient.bot.update({ where: { id: newData.id }, data: newData });
};
