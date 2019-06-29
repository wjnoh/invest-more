import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

const NewForm = props => {
  const { history, job, income, expense, handleChange } = props;

  return (
    <div className="new-form">
      <select
        className="input"
        name="job"
        value={job}
        onChange={e => handleChange(e)}
      >
        <option value="1" defaultValue>
          학생
        </option>
        <option value="2">직장인</option>
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
      <button className="submit" onClick={() => history.push("/reco")}>
        추천 지출액 확인
      </button>
    </div>
  );
};

export default withRouter(NewForm);
