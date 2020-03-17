import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from "./Footer"

import './App.css';

class Father extends Component {
  state = {
    titleH: 'My Header Title',
    titleF: "My New Footer"
  };
  myDefinition = e => {
    this.setState({
      titleH: e.target.value
    });
  };
  myDefinition2 = e => {
    this.setState({
      titleF: e.target.value
    });
  };
  titleF: e.target.value
  render() {
    return (
      <Fragment className='App'>
        <Header titleH={this.state.titleH} />
        <Body newValue1={this.state.titleH} newValue2={this.state.titleF} changeHandler={this.myDefinition}
        changeHandler2={this.myDefinition2}  />
        <Footer titleF={this.state.titleF} />
      </Fragment>
    );
  }
}

export default Father;
