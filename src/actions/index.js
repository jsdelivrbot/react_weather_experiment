import axios from 'axios';

const API_KEY = '7d5a0b14e491f1c12b3d418f6ad4b474';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
// npm install --save redux-promise

export const FETCH_WEATHER = 'FETCH_WEATER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
