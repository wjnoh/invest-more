import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

const ScenarioPage = props => {
  const { history, changeChat, user1, user2 } = props;
  console.log(user1, user2);

  return (
    <div className="scenario-page">
      <div className="btn__wrapper">
        <div className="btn" onClick={() => history.push("/new")}>
          비가입자 가입
        </div>
        <div
          className="btn"
          onClick={() => {
            changeChat([
              {
                isMine: false,
                data: [
                  {
                    type: "message",
                    content:
                      "지난 세 달 평균 지출액보다 많은 지출액이 발생했어요!"
                  },
                  {
                    type: "button",
                    content: [
                      { value: "네!", url: "" },
                      { value: "아뇨.", url: "" }
                    ]
                  }
                ]
              },
              {
                isMine: true,
                data: [
                  {
                    type: "message",
                    content: "네!"
                  }
                ]
              }
            ]);
            history.push("/chat");
          }}
        >
          가입자 추천
        </div>
        <div
          className="btn"
          onClick={() => {
            changeChat([
              {
                isMine: false,
                data: [
                  {
                    type: "message",
                    content:
                      "지난 세 달 평균 지출액보다 많은 지출액이 발생했어요!"
                  },
                  {
                    type: "button",
                    content: [
                      { value: "네!", url: "" },
                      { value: "아뇨.", url: "" }
                    ]
                  }
                ]
              },
              {
                isMine: true,
                data: [
                  {
                    type: "message",
                    content: "네!"
                  }
                ]
              }
            ]);
            history.push("/chat");
          }}
        >
          가입자 한도근접
        </div>
        <div
          className="btn"
          onClick={() => {
            changeChat([
              {
                isMine: false,
                data: [
                  {
                    type: "message",
                    content: `BOOM!!!!! 탕진님은 한도금액 ${user2.recommendation.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}원을 초과하셨어요! 돈을 흥청망청 쓰셨군요!! (초과금액 ${String(
                      Number(user2.accumulative_expenditure) -
                        Number(user2.recommendation)
                    ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원)`
                  },
                  {
                    type: "message",
                    content: "수익률 6.6% 상품에 투자할 기회를 날리셨어요!"
                  },
                  {
                    type: "message",
                    content:
                      "이번달을 알뜰하게 마무리하기 위해서 똑똑이가 소액투자상품을 추천드려요."
                  },
                  {
                    type: "button",
                    content: [
                      { value: "네 추천해주세요!", url: "/invest" },
                      { value: "아뇨.", url: "" }
                    ]
                  }
                ]
              }
            ]);
            history.push("/chat");
          }}
        >
          가입자 한도초과
        </div>
      </div>
    </div>
  );
};

export default withRouter(ScenarioPage);
