import React from "react";
import RecoForm from "../../components/RecoForm";
import "./styles.scss";

const RecoPage = () => {
  return (
    <div className="reco-page">
      <div className="reco-page__wrapper">
        <img
          className="reco__img"
          src={require("../../images/Analytics.svg")}
          alt="anal"
        />
        <RecoForm />
      </div>
    </div>
  );
};

export default RecoPage;
