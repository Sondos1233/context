import { combineReducers } from "redux";
import MoviesReducer from './action/reducer/movie';
import detailsReducer from './action/reducer/moviedetails'
import languageReducer from "./action/reducer/language";

export default  combineReducers({
  movies:MoviesReducer,
  movieDetails:detailsReducer,
  language:languageReducer,
  })