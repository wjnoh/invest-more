import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputForm from "./presenter";

class Container extends Component {
  state = {
    limit: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { limit } = this.state;
    const { history } = this.props;
    e.preventDefault();

    if (limit !== "") {
      if (window.confirm(`설정하신 한도는 ${limit}입니다. 맞나요?`)) {
        history.push("/complete");
      }
    } else {
      alert("지출 한도를 입력해주세요!");
    }
  };

  render() {
    return (
      <InputForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(Container);
