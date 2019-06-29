import React from "react";
import InvestForm from "../../components/InvestForm";
import "./styles.scss";

const InvestPage = props => {
  const { addChat } = props;

  return (
    <div className="invest-page">
      <InvestForm addChat={addChat} />
    </div>
  );
};

export default InvestPage;
