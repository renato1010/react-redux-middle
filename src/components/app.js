import React, { Component } from 'react';
import SearchBar from '../containers/search-bar.container';
import WeatherList from '../containers/weather-list.container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList/>
      </div>
    );
  }
}
