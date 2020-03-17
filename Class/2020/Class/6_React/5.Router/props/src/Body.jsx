import React, { Component } from 'react';

export class Body extends Component {
  
  render() {
    let styleInput = {display:"block",margin:"0.5rem"}
    return (
      <div>
        <input
          type='text'
          onChange={this.props.changeHandler}
          placeholder={this.props.newValue1} style={styleInput}
        />
        <input
          type='text'
          onChange={this.props.changeHandler2}
          placeholder={this.props.newValue2} style={styleInput}
        />
      </div>
    );
  }
}

export default Body;
