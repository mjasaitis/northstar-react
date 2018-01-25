import { combineReducers } from "redux";
import someValuesReducer from "./reducer_somevalues";

const rootReducer = combineReducers({
	someValues: someValuesReducer
});

export default rootReducer;
