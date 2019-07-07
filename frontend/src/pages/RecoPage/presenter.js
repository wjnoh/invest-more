import React from "react";
import RecoForm from "../../components/RecoForm";
import "./styles.scss";

const RecoPage = props => {
  const { user } = props;

  return (
    <div className="reco-page">
      <div className="reco-page__wrapper">
        <img
          className="reco__img"
          src={require("../../images/Anal-Search.svg")}
          alt="anal"
        />
        <RecoForm user={user} />
      </div>
    </div>
  );
};

export default RecoPage;
