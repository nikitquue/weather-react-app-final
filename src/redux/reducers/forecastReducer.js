import {
    LOAD_FORECAST,
    LOAD_FORECAST_ERROR,
    LOAD_FORECAST_LOADING,
  } from "../actions/types";
  
  const initialState = {
    days: [],
    loading: false,
    loaded: false,
    error: null,
  };
  export const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_FORECAST:
        const days = [...action.payload];
        return { days, loading: false, loaded: true };
      default:
        return state;
    }
  };
  