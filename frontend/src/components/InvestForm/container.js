import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InvestForm from "./presenter";

class Container extends Component {
  state = {
    money: "",
    period: "",
    fund: "보통위험"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { history, addChat } = this.props;
    const { money, period, fund } = this.state;
    if (money !== "" && period !== "" && fund !== "") {
      if (
        window.confirm(
          `입력하신 금액은 ${money.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}원, 기간은 ${period}달, 펀드는 ${fund} 상품입니다. 맞나요? `
        )
      ) {
        addChat([
          {
            isMine: true,
            data: [
              {
                type: "message",
                content: "네! 추천해주세요!"
              }
            ]
          },
          {
            isMine: false,
            data: [
              {
                type: "message",
                content: "상품 가입 감사합니다!"
              },
              {
                type: "message",
                content: "소주님의 스마트한 금융생활에 똑똑이가 함께 할게요~♡"
              }
            ]
          }
        ]);
        history.push("/chat");
      }
    } else {
      alert("값을 모두 입력해주세요!");
    }
  };

  render() {
    return (
      <InvestForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(Container);
