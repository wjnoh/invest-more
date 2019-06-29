import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

const ButtonChat = props => {
  const { history, content } = props;

  return (
    <ul className="chat-buttons">
      {content.map((c, index) => {
        return (
          <li
            className="chat-button"
            key={index}
            onClick={() => c.url !== "" && history.push(c.url)}
          >
            {c.value}
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(ButtonChat);
