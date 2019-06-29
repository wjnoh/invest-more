import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NewForm from "./presenter";

class Container extends Component {
  state = {
    job: "학생",
    income: "",
    expense: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { job, income, expense } = this.state;
    const { updateUser, history } = this.props;

    if (job !== "" && income !== "" && expense !== "") {
      fetch("http://122.99.178.40:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customer_cd: "10230130123",
          customer_nm: "홍길동",
          monthly_income: income,
          job: job,
          investment_propensity: "고위험",
          recommendation: "0"
        })
      })
        .then(res => res.json())
        .then(json => updateUser(json[1].data))
        .then(() => history.push("/reco"));
    } else {
      alert("값을 모두 입력해주세요!");
    }
  };

  render() {
    return (
      <NewForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(Container);
