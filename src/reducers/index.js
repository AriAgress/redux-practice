import { combineReducers } from "redux";
import colorReducer from "./colorSwitch"
import searchMovies from "./searchMovies"
import searchTerms from './searchTerms'

const allReducers = combineReducers({
  colorSwitch: colorReducer,
  searchMovies,
  searchTerms,
});

export default allReducers;