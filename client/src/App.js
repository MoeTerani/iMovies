import React, { Component, useState, useEffect } from 'react'
import './App.css';
import Home from './components/Home.js'
import Movie from './components/Movie'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

function App() {
  const [popularMoviesData, setPopularMoviesData] = useState([])

  useEffect(() => {
    // This gets called on mount and when buttonClicked changes

    const rememberMe = localStorage.getItem('popularMoviesData');
    if (rememberMe) localStorage.setItem('popularMoviesData', JSON.stringify(popularMoviesData));


    return () => console.log('unmounting...');
  }, [popularMoviesData])


  return (
    <Router>
      <Switch>
        <Route path="/" exact render={(props) => <Home popularMoviesData={popularMoviesData} setPopularMoviesData={setPopularMoviesData} {...props} />} />
        <Route path="/movies/:id" exact render={(props) => <Movie popularMoviesData={popularMoviesData} setPopularMoviesData={setPopularMoviesData} {...props} />} />
        {/* <Route path="/" exact component={Home}></Route> */}
        {/* <Route path="/movies/:id" exact component={Movie}></Route> */}
        {/* <Route path="/" exact component={Home}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
