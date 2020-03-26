import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Post"

class App extends Component {
  state = {
    posts = []
  }
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Redux-React-Example</h2>
      </header>
      <hr/>
    </div>
  );
  }
}

export default App;
