import React from "react";
import "./styles.scss";

const ScenarioPage = () => {
  return (
    <div className="scenario-page">
      <div className="btn__wrapper">
        <div className="btn">비가입자 가입</div>
        <div className="btn">가입자 추천</div>
        <div className="btn">가입자 한도근접</div>
        <div className="btn">가입자 한도초과</div>
      </div>
    </div>
  );
};

export default ScenarioPage;
