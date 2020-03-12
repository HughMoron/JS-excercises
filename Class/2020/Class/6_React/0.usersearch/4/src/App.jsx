import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.jsx";
import axios from "axios";
import Users from "./components/users/Users.jsx";
import Search from "./Search";

class App extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;

    const res = await axios.get(
      `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
    );
    this.setState({ users: res.data });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
