import {
    DELETE_CITY,
    LOAD_CITIES,
    SEARCH_CITY,
    SEARCH_CITY_LOADING,
    SEARCH_CITY_ERROR,
    UPDATE_CITY,
  } from "../actions/types";
  
  const initialState = {
    citiesWeather: [],
    loading: false,
    loaded: false,
    error: null,
  };
  
  export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_CITIES:
        return state;
      case SEARCH_CITY:
        return {
          ...state,
          citiesWeather: [...state.citiesWeather, action.payload],
          loading: false,
          loaded: true,
        };
      case UPDATE_CITY:
        return {
          ...state,
          citiesWeather: [...state.citiesWeather, action.payload],
          loading: false,
          loaded: true,
        };
      case SEARCH_CITY_LOADING:
        return { ...state, loading: true };
      case SEARCH_CITY_ERROR:
        return { ...state, loading: false, loaded: false, error: action.payload };
      case DELETE_CITY:
        return {
          ...state,
          citiesWeather: state.citiesWeather.filter(
            (item) => item.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  