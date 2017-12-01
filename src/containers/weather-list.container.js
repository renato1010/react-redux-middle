import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.component';
import GoogleMap from '../components/google-map.component';

class WeatherList extends Component {
  renderWeather(cityData) {
    if (!cityData) {
      return (
        <tr>
          <td>
            <p>pls check city name and try again</p>
          </td>
          <td>
            <p>no data</p>
          </td>
          <td>
            <p>no data</p>
          </td>
          <td>
            <p>no data</p>
          </td>
        </tr>
      );
    }
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap
            lat={lat}
            lon={lon}
          />
        </td>
        <td>
          <Chart data={temps} color="orange" />
        </td>
        <td>
          <Chart data={pressures} color="crimson" />
        </td>
        <td>
          <Chart data={humidity} color="cyan" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
