import React, { Component, useState, useEffect } from 'react'
import './Home.css'
import Header from './Header'
import Hero from './Hero'
import Search from './Search'
import Card from './Card'
import axios from 'axios'

export default function Home() {
  // const [inputValue, setInputValue] = useState('');
  const [popularMoviesData, setPopularMoviesData] = useState([])

  useEffect(() => {
    // This gets called on mount and when buttonClicked changes
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:8080/api/v1/popularmovies')

        // console.log(popularMoviesData);
        console.log(data.data.results);
        setPopularMoviesData(data.data.results)
        console.log(popularMoviesData)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    return () => console.log('unmounting...');
  }, [])


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
      return <Card key={i} cardInfo={item} />
    })
    return cards
  }

  const popularMovies = popularMoviesData ? renderCard(popularMoviesData) : null;
  return (
    <div className="home" >
      <Header />
      <Hero />
      <Search />
      {popularMovies}
    </div >
  )
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
