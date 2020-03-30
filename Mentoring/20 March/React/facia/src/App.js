import React, { Component } from 'react';
import './App.css';



class App extends Component {
 state= {
   value: 'Please write an essay about your favorite DOM element.'
}
  
 handleChange(event){
    props.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

render(){
 
  return (  
    <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
        </label>
          <textarea value={this.state.value} onChange={props.handleChange} />
        <input type="submit" value="Submit" />
      </form>
  );
 }
}

export default App;
