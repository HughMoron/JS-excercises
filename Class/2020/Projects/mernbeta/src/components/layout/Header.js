import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1> TodoList </h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to='/about'>
        About
      </Link>{" "}
    </header>
  );
}

const headerStyle = {
  background: "rgb(20,120,120)",
  color: "white",
  textAlign: "center",
  padding: "5px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Header;
