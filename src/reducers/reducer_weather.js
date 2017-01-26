import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
	case FETCH_WEATHER:

		// better to use concat than push
		// ppush change instance of state
		// concat add only
		return state.concat([action.payload.data]);
	} 

	return state;
}