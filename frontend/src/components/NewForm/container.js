import React, { Component } from "react";
import NewForm from "./presenter";

class Container extends Component {
  state = {
    job: 1,
    income: undefined,
    expense: undefined
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <NewForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Container;
