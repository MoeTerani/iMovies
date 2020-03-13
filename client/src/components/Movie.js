import React, { useState, useEffect } from 'react';
import './Movie.css';
import Header from './Header';
import MovieHero from './MovieHero';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Movie(props) {
  const [movieDetail, setMovieDetail] = useState({});
  const movieId = useParams().id;
  // console.log('id:   ' + id);
  useEffect(() => {
    // This gets called on mount and when buttonClicked changes

    fetchData(movieId);
    return () => console.log('unmounting...');
  }, []);
  const fetchData = async id => {
    try {
      const data = await axios.get(`http://localhost:8080/api/v1/movie/${id}`);
      // data = await JSON.parse(data);
      console.log('fetch details' + data.data);
      setMovieDetail(data.data);
      console.log(movieDetail);
    } catch (error) {
      console.error(error);
    }
  };
  const popularMoviesData = JSON.parse(
    localStorage.getItem('popularMoviesData')
  );
  const movie = popularMoviesData.find(item => item.id == movieId);

  // console.log(movie.title)
  return (
    <div className='movie'>
      <Header />
      <MovieHero heroData={movie} />
      <h1>NAME: {movie.title}</h1>
    </div>
  );
}
