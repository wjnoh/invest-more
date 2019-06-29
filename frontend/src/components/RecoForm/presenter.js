import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

const RecoForm = props => {
  const { history, user } = props;

  return (
    <div className="reco-form">
      <div className="reco__message">
        고객님의 수익에 맞는
        <br />
        추천 평균 지출액은
        <br />월{" "}
        <span className="highlight">
          {user.recommendation.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        원 입니다.
      </div>
      <div className="reco__question">이대로 설정하시겠어요?</div>
      <div className="reco__btns">
        <button className="reco__btn" onClick={() => history.push("/complete")}>
          네!
        </button>
        <button className="reco__btn" onClick={() => history.push("/input")}>
          직접 설정할게요.
        </button>
      </div>
    </div>
  );
};

export default withRouter(RecoForm);
