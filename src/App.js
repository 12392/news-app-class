// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { Component } from "react";

// component
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  c = "jhon";
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5} />
      </div>
    );
  }
}
