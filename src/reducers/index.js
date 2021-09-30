import { combineReducers } from "redux";
import colorSwitch from "./colorSwitch"
import searchMovies from "./searchMovies"
import searchTerms from './searchTerms'

const allReducers = combineReducers({
  colorSwitch,
  searchMovies,
  searchTerms,
});

export default allReducers;