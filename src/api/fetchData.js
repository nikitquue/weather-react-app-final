import axios from "axios";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "3bc406d2cc3d70c6932ff8463601e246";

export const fetchWeather = async (city) => {
  const { data } = await axios.get(
    WEATHER_URL + `?q=${city}&units=metric&appid=${API_KEY}`
  );
  return data;
};
export const fetchWeatherById = async (id) => {
  const { data } = await axios.get(
    WEATHER_URL + `?id=${id}&units=metric&appid=${API_KEY}`
  );
  return data;
};
export const fetchForecast = async (cityID) => {
  const { data } = await axios.get(
    FORECAST_URL + `?id=${cityID}&units=metric&appid=${API_KEY}`
  );
  return data;
};
export const getDays = (list) => {
  let day = [list[0]];
  let days = [];
  for (let i = 0; i < list.length; i++) {
    let dayList = list[i].dt_txt.substr(8, 2);
    if (dayList === day[0].dt_txt.substr(8, 2)) {
      day.push(list[i]);
    } else {
      days.push(JSON.parse(JSON.stringify(day)));
      day.length = 0;
      day.push(list[i]);
    }
  }
  return days;
};
