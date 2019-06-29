import React from "react";
import "./styles.scss";

const RecoForm = () => {
  return (
    <div className="reco-form">
      <div className="reco__message">
        고객님의 수익에 맞는
        <br />
        추천 평균 지출액은
        <br />월 <span className="highlight">500,000</span>원 입니다.
      </div>
      <div className="reco__question">이대로 설정하시겠어요?</div>
      <div className="reco__btns">
        <button className="reco__btn">네!</button>
        <button className="reco__btn">직접 설정할게요.</button>
      </div>
    </div>
  );
};

export default RecoForm;
