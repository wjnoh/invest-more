import React from "react";
import "./styles.scss";

const InputForm = props => {
  const { limit, handleChange } = props;

  return (
    <form className="input-form">
      <input
        type="number"
        className="input"
        name="limit"
        placeholder="한달 지출액을 입력하세요."
        value={limit}
        onChange={e => handleChange(e)}
        required
      />
      <button className="btn">설정하기</button>
    </form>
  );
};

export default InputForm;
