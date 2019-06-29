import React from "react";
import "./styles.scss";

const InvestForm = props => {
  const { money, period, fund, handleChange } = props;

  return (
    <form className="invest-form">
      <input
        type="number"
        className="input"
        placeholder="금액"
        value={money}
        name="money"
        onChange={e => handleChange(e)}
        required
      />
      <input
        type="number"
        className="input"
        placeholder="기간"
        value={period}
        name="period"
        onChange={e => handleChange(e)}
        required
      />
      <select
        className="input"
        name="fund"
        value={fund}
        onChange={e => handleChange(e)}
        required
      >
        <option value="1">매우낮은위험 0.72%</option>
        <option value="2" defaultValue>
          낮은위험 0.95%
        </option>
        <option value="3">보통위험 1.56%</option>
        <option value="4">높은위험 2.76%</option>
        <option value="5">다소높은위험 2.89%</option>
        <option value="6">매우높은위험 6.65%</option>
      </select>
      <button className="btn">가입하기</button>
    </form>
  );
};

export default InvestForm;
