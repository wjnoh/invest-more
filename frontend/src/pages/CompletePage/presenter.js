import React from "react";
import "./styles.scss";

const CompletePage = () => {
  return (
    <div className="complete-page">
      <div className="complete__wrapper">
        <img
          className="complete__img"
          src={require("../../images/Saving.svg")}
          alt="saving"
        />
        <span className="complete__message">
          절약과 투자의 시작!
          <br />
          <span className="highlight">세이브 핀</span>이<br />
          설정되었습니다. :D
        </span>
      </div>
    </div>
  );
};

export default CompletePage;
