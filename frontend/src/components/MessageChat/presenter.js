import React from "react";
import "./styles.scss";

const MessageChat = props => {
  const { isMine, content } = props;

  return (
    <>
      {isMine ? (
        <div className="chat__content chat__content--mine">{content}</div>
      ) : (
        <div className="chat__content chat__content">{content}</div>
      )}
    </>
  );
};

export default MessageChat;
