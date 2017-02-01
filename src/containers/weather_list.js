import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // take the two el inside coord object and assign them 
    // to the var lon and lat
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
        	<Chart data={temps} color="orange" units="C"></Chart>
        </td>
        <td>
        	<Chart data={pressures} color="green" units="hPa"></Chart>
        </td>
        <td>
        	<Chart data={humidities} color="black" units="%"></Chart>
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
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

