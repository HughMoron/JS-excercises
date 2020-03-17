import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.props.changeHandler}
          placeholder={this.props.newValue1}
        />
        <input
          type='text'
          onChange={this.props.changeHandler2}
          placeholder={this.props.newValue2}
        />
      </div>
    );
  }
}

export default Body;
