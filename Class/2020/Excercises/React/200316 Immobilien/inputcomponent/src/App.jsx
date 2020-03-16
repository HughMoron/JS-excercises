import React from 'react';
import './App.css';
import Input from "./input.jsx"


function App() {
const displayInput = (e)=>{
  let inPut = e.target.value
  console.log()
}

  return (
    <div className="App">
     <Input onChange={displayInput}/>
    </div>
  );
}

export default App;