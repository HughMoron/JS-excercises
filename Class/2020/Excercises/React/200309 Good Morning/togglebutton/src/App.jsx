import React, { Component } from "react";
import Light from "./Light.jsx";
import "./App.css";


class App extends Component {
  state = { isToggleOn: true };
  changeText = () => {
    this.setState(x => ({
      isToggleOn: !x.isToggleOn
    }));
  };

  render() {
    return (
      <>
        <Light isToggleOn = {this.state.isToggleOn} />
        <button id='onoff' onClick={this.changeText}>
          {this.state.isToggleOn ? "On" : "Off"}



        </button>
      </>
    );
  }
}

export default App;
