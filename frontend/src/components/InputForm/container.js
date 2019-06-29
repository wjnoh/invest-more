import React, { Component } from "react";
import InputForm from "./presenter";

class Container extends Component {
  state = {
    limit: undefined
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <InputForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Container;
