import React, { Component, useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import Hero from './Hero';
import Search from './Search';
import Card from './Card';
import axios from 'axios';

export default function Home() {
  // const [inputValue, setInputValue] = useState('');
  // const [popularMoviesData, setPopularMoviesData] = useState([])
  // useEffect(() => {
  //   // This gets called on mount and when buttonClicked changes
  //   // const fetchData = async () => {
  //   //   try {
  //   //     const data = await axios.get('http://localhost:8080/api/v1/popularmovies')

  //   //     // console.log(popularMoviesData);
  //   //     // console.log(data.data.results);
  //   //     props.setPopularMoviesData(data.data.results)
  //   //   } catch (error) {
  //   //     console.error(error);
  //   //   }
  //   // }
  //   // fetchData();

  //   return () => console.log('unmounting...');
  // }, [])

  const popularMoviesData = JSON.parse(
    localStorage.getItem('popularMoviesData')
  );

  // async function fetchData() {
  //   try {
  //     popularMoviesData = await axios.get('http://localhost:8080/api/v1/popularmovies')
  //     // console.log(popularMoviesData);
  //     setPopularMoviesData([popularMoviesData.data])
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function renderCard(array) {
    const cards = array.map((item, i) => {
      return <Card key={i} cardInfo={item} />;
    });
    return cards;
  }

  const popularMovies = popularMoviesData
    ? renderCard(popularMoviesData)
    : null;
  const heroData = popularMoviesData[0];
  return (
    <div className='home'>
      <Header />
      <Hero heroData={heroData} />
      <Search />
      <div className='card__container'>{popularMovies}</div>
    </div>
  );
}

// export default class Home extends Component {
//   constructor() {
//     super();
//     this.
//     }
//   render() {
//     return (
//       <div className="home" >
//         <Header />
//         <Hero />
//         <Search />
//         {popularMovies}
//       </div >
//     )
//   }
// }
