import axios from "axios";

export const SET_PERSON_PROPS = "SET_PERSON_PROPS";
export const SET_FACILITY_PROPS = "SET_FACILITY_PROPS";
export const SET_EXPOSURE_PROPS = "SET_EXPOSURE_PROPS";
export const SET_LOADING = "SET_LOADING";
export const SET_SHOW_RESULT = "SET_SHOW_RESULT";

export function getPropsFromAPI(someValue) {
	const request = axios.get(`/person/${someValue}`);

	return (dispatch, getState) => {
		request
			.then(response => {
				dispatch({ type: SET_PERSON_PROPS, payload: response.data });

				return axios.get(`/facility/${response.data.val1}`);
			})
			.then(response => {
				dispatch({ type: SET_FACILITY_PROPS, payload: response.data });

				const someValues = getState().someValues;
				return axios.get(`/exposure/${someValues.val2}`);
			})
			.then(response => {
				dispatch({ type: SET_EXPOSURE_PROPS, payload: response.data });
				dispatch(setLoading(false));
				dispatch(setShowResult(true));
			})
			.catch(error => {
				console.log(error);
			});
	};
}

export function setLoading(val) {
	return { type: SET_LOADING, payload: val };
}

export function setShowResult(val) {
	return { type: SET_SHOW_RESULT, payload: val };
}
