import React from 'react';
import './App.css';
import Home from './components/Home.js'
import Movie from './components/Movie'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movies/:id" exact component={Movie}></Route>
        {/* <Route path="/" exact component={Home}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
