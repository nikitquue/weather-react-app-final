import {
    fetchWeather,
    fetchForecast,
    fetchWeatherById,
    getDays,
  } from "../../api/fetchData";
  import {
    SEARCH_CITY,
    SEARCH_CITY_ERROR,
    SEARCH_CITY_LOADING,
    DELETE_CITY,
    LOAD_CITIES,
    LOAD_FORECAST,
    UPDATE_CITY,
    LOAD_FORECAST_LOADING,
    LOAD_FORECAST_ERROR,
  } from "./types";
  
  export const searchCityByName = (city) => {
    return async (dispatch) => {
      const data = await fetchWeather(city);
      dispatch({ type: SEARCH_CITY, payload: data });
    };
  };
  export const updateCityById = (id) => {
    return async (dispatch) => {
      const data = await fetchWeatherById(id);
      dispatch({ type: UPDATE_CITY, payload: data });
    };
  };
  
  export const deleteCityById = (id) => {
    return (dispatch) => {
      dispatch({
        type: DELETE_CITY,
        payload: id,
      });
    };
  };
  
  export const searchForecastById = (id) => {
    return async (dispatch) => {
      const data = await fetchForecast(id);
      const days = getDays(data.list);
      dispatch({ type: LOAD_FORECAST, payload: days });
    };
  };
  