import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

const NewForm = props => {
  const { history } = props;

  return (
    <div className="new-form">
      <select className="input" name="job">
        <option value="student" defaultValue>
          학생
        </option>
        <option value="worker">직장인</option>
      </select>
      <input
        type="text"
        className="input"
        name="income"
        placeholder="월 고정 수입을 입력하세요."
      />
      <input
        type="text"
        className="input"
        name="expense"
        placeholder="지난달 지출을 입력하세요."
      />
      <button className="submit" onClick={() => history.push("/reco")}>
        추천 지출액 확인
      </button>
    </div>
  );
};

export default withRouter(NewForm);
