import React, { Component } from "react";
import InvestForm from "./presenter";

class Container extends Component {
  componentDidMount() {
    fetch("http://122.99.178.40:5000/productinformation")
      .then(res => res.json())
      .then(json => console.log(json));
  }

  state = {
    money: undefined,
    period: undefined,
    fund: 3
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <InvestForm
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
      />
    );
  }
}

export default Container;
