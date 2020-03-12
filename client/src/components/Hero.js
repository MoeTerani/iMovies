import './Hero.css';

import React from 'react';

export default function Hero({ heroData }) {
  console.log(heroData);
  const imgUrl = 'https://image.tmdb.org/t/p/w1280' + heroData.backdrop_path;
  const heroStyle = {
    color: 'blue',
    background: 'url(' + imgUrl + ')'
  };
  return (
    <div className='hero' style={heroStyle}>
      <div class='heroimage-content'>
        <div class='heroimage-text'>
          <h1>A Rainy Day in New York</h1>
          <p>
            Two young people arrive in New York to spend a weekend, but once
            they arrive they're met with bad weather and a series of adventures.
          </p>
        </div>
      </div>
    </div>
  );
}
