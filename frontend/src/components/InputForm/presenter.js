import React from "react";
import "./styles.scss";

const InputForm = props => {
  const { limit, handleChange, handleSubmit } = props;

  return (
    <form className="input-form">
      <input
        type="number"
        className="input"
        name="limit"
        placeholder="한달 지출 한도를 입력하세요."
        value={limit}
        onChange={e => handleChange(e)}
        required
      />
      <div className="btn" onClick={e => handleSubmit(e)}>
        설정하기
      </div>
    </form>
  );
};

export default InputForm;
