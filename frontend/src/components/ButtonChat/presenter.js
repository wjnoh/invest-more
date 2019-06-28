import React from "react";
import "./styles.scss";

const ButtonChat = props => {
  const { content } = props;

  return (
    <ul className="chat-buttons">
      {content.map((c, index) => {
        return (
          <li className="chat-button" key={index}>
            {c.value}
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonChat;
