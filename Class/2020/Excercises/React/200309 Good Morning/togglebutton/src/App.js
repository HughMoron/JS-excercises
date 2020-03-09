import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
   <button id="onoff" onClick={changeText}>On</button>
    </div>
  );
}

function changeText(){

  if(document.getElementById("onoff").innerText === "On")
  {document.getElementById("onoff").innerText ="Off"}  
  else if (document.getElementById("onoff").innerText === "Off")
  {document.getElementById("onoff").innerText = "On"}
}



export default App;
