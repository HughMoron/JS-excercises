import React, { Component } from 'react';
import './App.css';
// import Header from "./components/Header";

// https://swapi.co/

class App extends Component {
 state= {character: {}
}

componentDidMount(){
fetch("https://swapi.co/api/people/10")
}

render(){
  return (
    <div className="App">
      {/* <Header/> */}
      Code goes here ...
    </div>
  );
 }
}

export default App;
