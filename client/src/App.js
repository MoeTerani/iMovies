import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home.js';
import Movie from './components/Movie';
import axios from 'axios';

import MovieDetail from './components/MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

class App extends Component {
  // const[popularMoviesData, setPopularMoviesData] = useState([])

  state = {
    popularMoviesData: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await axios.get(
        'http://localhost:8080/api/v1/popularmovies'
      );

      // console.log(popularMoviesData);
      // console.log(data.data.results);

      this.setState(
        () => ({ popularMoviesData: data.data.results }),
        () => {
          localStorage.setItem(
            'popularMoviesData',
            JSON.stringify(this.state.popularMoviesData)
          );
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            render={props => (
              <Home
                popularMoviesData={this.state.popularMoviesData}
                {...props}
              />
            )}
          />
          <Route
            path='/movies/:id'
            exact
            render={props => (
              <MovieDetail
                popularMoviesData={this.state.popularMoviesData}
                {...props}
              />
            )}
          />
          {/* <Route path="/" exact component={Home}></Route> */}
          {/* <Route path="/movies/:id" exact component={Movie}></Route> */}
          {/* <Route path="/" exact component={Home}></Route> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
