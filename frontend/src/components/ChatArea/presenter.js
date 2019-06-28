import React from "react";
import Chat from "../Chat";
import "./styles.scss";

const ChatArea = () => {
  return (
    <section className="chat-area">
      <Chat
        isMine={false}
        data={[
          { type: "message", content: "안녕하세요!" },
          { type: "message", content: "반갑습니다!" },
          {
            type: "button",
            content: [
              { value: "조회", url: "" },
              { value: "조회", url: "" },
              { value: "조회", url: "" },
              { value: "조회", url: "" },
              { value: "조회", url: "" }
            ]
          }
        ]}
      />
      <Chat
        isMine={true}
        data={[
          { type: "message", content: "안녕하세요!" },
          { type: "message", content: "반갑습니다!" }
        ]}
      />
    </section>
  );
};

export default ChatArea;
