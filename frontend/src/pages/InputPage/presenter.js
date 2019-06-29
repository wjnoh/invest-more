import React from "react";
import InputForm from "../../components/InputForm";
import "./styles.scss";

const InputPage = () => {
  return (
    <div className="input-page">
      <div className="input-page__wrapper">
        <img
          src={require("../../images/Stats.svg")}
          className="input-page__img"
          alt="graph"
        />
        <InputForm />
      </div>
    </div>
  );
};

export default InputPage;
