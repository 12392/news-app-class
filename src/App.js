// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  c = "jhon";
  render() {
    return (
      <div>
        <p>Hi I am class component {this.c}</p>
      </div>
    );
  }
}
