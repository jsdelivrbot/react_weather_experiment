import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>

		);
	}
} 

// ES6 synthax
function mapStateToProps( { weather } ) {
	return { weather };
}

// old synthax
// function mapStateToProps( state ) {
// 	return { weather: state.weather };
// }

export default connect(mapStateToProps)(WeatherList)