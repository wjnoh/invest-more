import React, { Component } from "react";
import Chat from "../Chat";
import "./styles.scss";

class ChatArea extends Component {
  componentDidMount = () => {
    this.chatAreaRef.scrollTop = this.chatAreaRef.scrollHeight;
  };

  componentDidUpdate() {
    this.chatAreaRef.scrollTop = this.chatAreaRef.scrollHeight;
  }

  render() {
    const { chat } = this.props;
    const sample = [
      {
        isMine: false,
        data: [
          {
            type: "message",
            content: "시나리오를 실행해주세요!"
          },
          {
            type: "button",
            content: [{ value: "네!", url: "/" }, { value: "아뇨.", url: "" }]
          }
        ]
      }
    ];

    return (
      <section className="chat-area" ref={ref => (this.chatAreaRef = ref)}>
        {JSON.stringify(chat) !== JSON.stringify([])
          ? chat.map((c, index) => {
              return <Chat key={index} isMine={c.isMine} data={c.data} />;
            })
          : sample.map((c, index) => {
              return <Chat key={index} isMine={c.isMine} data={c.data} />;
            })}
      </section>
    );
  }
}

export default ChatArea;
