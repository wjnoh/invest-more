import React from "react";
import MessageChat from "../MessageChat";
import ButtonChat from "../ButtonChat";
import "./styles.scss";

const Chat = props => {
  const { isMine, data } = props;

  return (
    <div className="chat">
      {isMine ? (
        <ul className="chat__cols chat__cols--mine">
          <li className="chat__col chat__col--mine">
            {data.map((d, index) => {
              return (
                (d.type === "message" && (
                  <MessageChat
                    key={index}
                    isMine={isMine}
                    content={d.content}
                  />
                )) ||
                (d.type === "button" && (
                  <ButtonChat key={index} content={d.content} />
                ))
              );
            })}
          </li>
        </ul>
      ) : (
        <ul className="chat__cols">
          <li className="chat__col">
            <span className="profile-img" />
          </li>
          <li className="chat__col">
            <span className="chat__name">똑똑이</span>
            {data.map((d, index) => {
              return (
                (d.type === "message" && (
                  <MessageChat
                    key={index}
                    isMine={isMine}
                    content={d.content}
                  />
                )) ||
                (d.type === "button" && (
                  <ButtonChat key={index} content={d.content} />
                ))
              );
            })}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Chat;
