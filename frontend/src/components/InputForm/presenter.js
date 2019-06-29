import React from "react";
import "./styles.scss";

const InputForm = () => {
  return (
    <div className="input-form">
      <input
        type="text"
        className="input"
        name="limit"
        placeholder="한달 지출액을 입력하세요."
      />
      <button className="submit">설정하기</button>
    </div>
  );
};

export default InputForm;
