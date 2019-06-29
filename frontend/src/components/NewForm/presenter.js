import React from "react";
import "./styles.scss";

const NewForm = props => {
  const { job, income, expense, handleChange, handleSubmit } = props;

  return (
    <div className="new-form">
      <select
        className="input"
        name="job"
        value={job}
        onChange={e => handleChange(e)}
      >
        <option value="학생" defaultValue>
          학생
        </option>
        <option value="직장인">직장인</option>
      </select>
      <input
        type="number"
        className="input"
        name="income"
        placeholder="월 고정 수입을 입력하세요."
        value={income}
        onChange={e => handleChange(e)}
      />
      <input
        type="number"
        className="input"
        name="expense"
        placeholder="지난달 지출을 입력하세요."
        value={expense}
        onChange={e => handleChange(e)}
      />
      <div className="btn" onClick={e => handleSubmit(e)}>
        추천 지출액 확인
      </div>
    </div>
  );
};

export default NewForm;
