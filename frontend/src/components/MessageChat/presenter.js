import React from "react";
import "./styles.scss";

const MessageChat = props => {
  const { isMine, data } = props;

  return (
    <div className="chat">
      {isMine ? (
        <ul className="chat__cols chat__cols--mine">
          <li className="chat__col">
            {data.map(d => {
              return (
                <div className="chat__content chat__content--mine">{d}</div>
              );
            })}
          </li>
        </ul>
      ) : (
        <ul className="chat__cols">
          <li className="chat__col chat__col--mine">
            <span className="profile-img" />
          </li>
          <li className="chat__col">
            <span className="chat__name">똑똑이</span>
            {data.map(d => {
              return <div className="chat__content">{d}</div>;
            })}
          </li>
        </ul>
      )}
    </div>
  );
};

export default MessageChat;
