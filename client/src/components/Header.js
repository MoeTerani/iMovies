import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <NavLink to='/'>
        <img
          id='header__img'
          src={
            'https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
          }
        ></img>
      </NavLink>
      <NavLink to='/'>
        <h2 className='header__title'>iMovies</h2>
      </NavLink>
    </div>
  );
}
