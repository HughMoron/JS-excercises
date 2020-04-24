import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  background: "rgb(20,120,120)",
  color: "white",
  textAlign: "center",
  padding: "5px",
};

export default Header;
