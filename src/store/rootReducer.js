import { combineReducers } from "redux";
import { calculatorReducer } from "./calculator/reducers";

export default combineReducers({
  calculator: calculatorReducer,
});
