import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.titleH}</h1>
      </header>
    );
  }
}

export default Header;
