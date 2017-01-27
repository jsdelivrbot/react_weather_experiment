import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
	case FETCH_WEATHER:

		// better to use concat than push
		// ppush change instance of state
		// concat add only
		// is better to not manipulate state
		return state.concat([action.payload.data]);
	} 

	return state;
}