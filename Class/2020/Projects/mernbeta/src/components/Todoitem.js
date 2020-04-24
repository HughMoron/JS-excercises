import React, { Component } from "react";
import PropTypes from "prop-types";

class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "rgb(220, 20, 20)",
  color: "rgb(255,255,255)",
  fontWeight: "bolder",
  border: "none",
  borderRadius: "50px",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right",
};

// PropTypes
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todoitem;
