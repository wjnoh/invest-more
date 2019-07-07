import React from "react";
import "./styles.scss";

const InvestForm = props => {
  const { money, period, fund, handleChange, handleSubmit } = props;

  return (
    <form className="invest-form">
      <input
        type="number"
        className="input"
        placeholder="금액(원)"
        value={money}
        name="money"
        onChange={e => handleChange(e)}
        required
      />
      <input
        type="number"
        className="input"
        placeholder="기간(달)"
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
        <option value="1매우낮은위험">매우낮은위험 상품 0.72%</option>
        <option value="낮은위험" defaultValue>
          낮은위험 상품 0.95%
        </option>
        <option value="보통위험">보통위험 상품 1.56%</option>
        <option value="높은위험">높은위험 상품 2.76%</option>
        <option value="다소높은위험">다소높은위험 상품 2.89%</option>
        <option value="매우높은위험">매우높은위험 상품 6.65%</option>
      </select>
      <div className="btn" onClick={e => handleSubmit(e)}>
        가입하기
      </div>
    </form>
  );
};

export default InvestForm;
