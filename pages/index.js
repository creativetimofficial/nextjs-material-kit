import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/landing");
  };

  render() {
    return <div />;
  }
}
