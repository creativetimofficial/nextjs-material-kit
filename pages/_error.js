import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  componentDidMount = () => {
    Router.push("/nextjs-material-kit/components");
  };

  render() {
    return <div />;
  }
}
