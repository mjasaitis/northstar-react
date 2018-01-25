import {
	SET_PERSON_PROPS,
	SET_FACILITY_PROPS,
	SET_EXPOSURE_PROPS,
	SET_LOADING,
	SET_SHOW_RESULT
} from "../actions";

const INITIAL_STATE = {
	loading: false,
	showResult: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_PERSON_PROPS:
			return {
				...state,
				val1: action.payload.val1,
				val2: action.payload.val2
			};
		case SET_FACILITY_PROPS:
			return {
				...state,
				val3: action.payload.val3,
				val4: action.payload.val4
			};
		case SET_EXPOSURE_PROPS:
			return {
				...state,
				val5: action.payload.val5,
				finalVal: state.val3 * state.val4
			};
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_SHOW_RESULT:
			return { ...state, showResult: action.payload };
		default:
			return state;
	}
}
