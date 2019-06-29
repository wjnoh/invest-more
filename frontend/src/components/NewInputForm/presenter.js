import React from "react";
import "./styles.scss";

const NewInputForm = () => {
  return (
    <div className="new-input-form">
      <select className="new-input" name="job">
        <option value="student" selected="selected">
          학생
        </option>
        <option value="worker">직장인</option>
      </select>
      <input
        type="text"
        className="new-input"
        name="income"
        placeholder="월 고정 수입을 입력하세요."
      />
      <input
        type="text"
        className="new-input"
        name="expense"
        placeholder="지난달 지출을 입력하세요."
      />
      <div className="new-submit">보내기</div>
    </div>
  );
};

export default NewInputForm;
