import React, { Component, useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import Hero from './Hero';
import Search from './Search';
import Card from './Card';
import axios from 'axios';

export default function Home() {
  const popularMoviesData = JSON.parse(
    localStorage.getItem('popularMoviesData')
  );

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
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' value={inputValue} onChange={handleChange} />
        <input type='submit' value='Submit' />
      </form>
      <div className='card__container'>{popularMovies}</div>
    </div>
  );
}
