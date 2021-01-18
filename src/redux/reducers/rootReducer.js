import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";
import { forecastReducer } from "./forecastReducer";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
});
