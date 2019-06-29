import React from "react";
import Chat from "../Chat";
import "./styles.scss";

const ChatArea = () => {
  return (
    <section className="chat-area">
      <Chat
        isMine={false}
        data={[
          {
            type: "message",
            content: "지난 세 달 평균 지출액보다 많은 지출액이 발생했어요!"
          },
          {
            type: "button",
            content: [{ value: "네!", url: "" }, { value: "아뇨.", url: "" }]
          }
        ]}
      />
      <Chat isMine={true} data={[{ type: "message", content: "네!" }]} />
    </section>
  );
};

export default ChatArea;
