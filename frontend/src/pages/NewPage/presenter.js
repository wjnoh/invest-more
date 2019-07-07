import React from "react";
import NewForm from "../../components/NewForm";
import "./styles.scss";

const NewPage = props => {
  const { updateUser } = props;

  return (
    <div className="new-page">
      <div className="new-page__wrapper">
        <img
          src={require("../../images/Finance.svg")}
          alt="graph"
          className="new-page__img"
        />
        <NewForm updateUser={updateUser} />
      </div>
    </div>
  );
};

export default NewPage;
