import React from "react";
import InvestForm from "../../components/InvestForm";
import "./styles.scss";

const InvestPage = props => {
  const { addChat } = props;

  return (
    <div className="invest-page">
      <div className="invest-page__wrapper">
        <img
          src={require("../../images/wallet.svg")}
          alt=""
          className="invest-page__img"
        />
        <InvestForm addChat={addChat} />
      </div>
    </div>
  );
};

export default InvestPage;
