import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "URL_TO_YOUR_CHATBOT_SCRIPT"; // Replace with your chatbot script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <chatBotInvouge agent-id="b3def8dc-21b5-41b0-84ee-0b556386f5f2"></chatBotInvouge>
  ) as JSX.Element;
};

export default ChatBot;
