import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { Fragment } from 'react';
import Form from "../src/components/form.jsx";
import Table from "../src/components/table.jsx";
import './App.css';

const App = () => {
  return(
  <Router>
    <Fragment className="App container">
    <h1>Add Book</h1>
    <Link to='/'>Add Book</Link> 
    <Link to={{ pathname: '/about' }}>Booklist</Link>
  <Switch>
  
  <Route 
    path='/'
    render={props => (
    <Form />
    )}
    />
  <Route 
    path='/about'
    render={props => (
    <Table />
    )}
    />
  
  </Switch>
  </Fragment>
  </Router>
  );
}

export default App;
