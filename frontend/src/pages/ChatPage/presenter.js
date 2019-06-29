import React from "react";
import Navigation from "../../components/Navigation";
import ChatArea from "../../components/ChatArea";
import ChatInput from "../../components/ChatInput";

const ChatPage = props => {
  const { chat } = props;

  return (
    <>
      <Navigation />
      <ChatArea chat={chat} />
      <ChatInput />
    </>
  );
};

export default ChatPage;
