import React from "react";
import MessageChat from "../MessageChat";
import "./styles.scss";

const ChatArea = () => {
  return (
    <section className="chat-area">
      <MessageChat isMine={false} data={["안녕하세요!", "반갑습니다!"]} />
      <MessageChat isMine={true} data={["안녕하세요!"]} />
      <MessageChat isMine={false} data={["안녕하세요!"]} />
    </section>
  );
};

export default ChatArea;
