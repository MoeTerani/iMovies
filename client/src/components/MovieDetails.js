import React, { Component, useState, useEffect } from 'react';
import './Movie.css';
import Header from './Header';
import MovieHero from './MovieHero';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ActorCard from './ActorCard';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: this.props.match.params.id,
      movieDetail: {},
      popularMoviesData: JSON.parse(localStorage.getItem('popularMoviesData')),
      movie: {}
    };
  }

  componentDidMount() {
    this.fetchData(this.state.movieId);
    // this.setId();

    this.setState({
      movie: this.state.popularMoviesData.find(
        item => item.id == this.state.movieId
      )
    });
  }

  // setId = () => {
  //   const movieId = useParams().id;
  //   this.setState({ movieId: movieId });
  // };
  //   const data = await axios.get(`http://localhost:8080/api/v1/movie/${id}`);
  fetchData = async id => {
    try {
      const data = await axios.get(`http://localhost:8080/api/v1/movie/${id}`);

      // console.log(popularMoviesData);
      // console.log(data.data.results);

      this.setState(
        () => ({ movieDetail: data.data }),
        () => {
          localStorage.setItem(
            'movieDetail',
            JSON.stringify(this.state.movieDetail)
          );
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  renderActorCard = array => {
    const actorCard = array.map((item, i) => {
      return <ActorCard key={i} actorCardInfo={item} />;
    });
  };
  // console.log(movie.title)
  render() {
    const cast = this.state.movieDetail.hasOwnProperty('credits') ? (
      this.renderActorCard(this.state.movieDetail.credits.cast)
    ) : (
      <h2>Loading Cast Data...</h2>
    );
    return (
      <div className='movie'>
        <Header />
        <MovieHero heroData={this.state.movie} />
        <h1 className='movie__popularity'>
          Popularity: {this.state.movie.popularity}
        </h1>
        {cast}
      </div>
    );
  }
}
