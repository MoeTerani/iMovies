import React, { Component, useState, useEffect } from 'react';
import './Home.css';
import Header from './Header';
import Hero from './Hero';
import Search from './Search';
import Card from './Card';
import axios from 'axios';

export default class Home extends Component {
  state = {
    value: '',
    searchData: [],

    popularMoviesData: JSON.parse(localStorage.getItem('popularMoviesData'))
  };

  componentDidMount() {
    console.log(this.state);
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value) {
      const result = this.fetchData(this.state.value);
      console.log('result serach  fetch: ' + result);
      this.setState(() => {
        return { searchData: result };
      });
    }
    event.target.value = '';
  };

  fetchData = async value => {
    try {
      const data = await axios.get(`http://localhost:8080/api/v1/${value}`);

      // console.log(popularMoviesData);
      // console.log(data.data.results);

      this.setState(
        () => ({ searchData: data.data.results }),
        () => {
          localStorage.setItem(
            'searchData',
            JSON.stringify(this.state.searchData)
          );
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  renderCard = array => {
    const cards = array.map((item, i) => {
      return <Card key={i} cardInfo={item} />;
    });
    return cards;
  };

  render() {
    const popularMovies = this.state.popularMoviesData
      ? this.renderCard(this.state.popularMoviesData)
      : null;
    const heroData = this.state.popularMoviesData[0];
    return (
      <div className='home'>
        <Header />
        <Hero heroData={heroData} />
        <h1>Most popular Movies</h1>
        {/* <form className='form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.inputValue}
            onChange={this.handleChange}
          />
          <input type='submit' value='Submit' />
        </form> */}
        <div className='card__container'>{popularMovies}</div>
      </div>
    );
  }
}
