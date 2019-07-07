import React from "react";
import IosCard from "react-ionicons/lib/IosCard";
import IosArrowUp from "react-ionicons/lib/IosArrowUp";
import "./styles.scss";

const ChatInput = () => {
  return (
    <section className="chat-input">
      <ul className="input__cols">
        <li className="input__col">
          <span className="money">
            <IosCard />
          </span>
        </li>
        <li className="input__col">
          <input type="text" className="input" />
          <span className="voice">
            <IosArrowUp />
          </span>
        </li>
      </ul>
    </section>
  );
};

export default ChatInput;
