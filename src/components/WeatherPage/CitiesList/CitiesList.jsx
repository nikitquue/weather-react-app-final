import { useEffect } from "react";
import { connect } from "react-redux";
import CityItem from "../CityItem/CityItem";

const CitiesList = ({ citiesWeather }) => {
  if (!citiesWeather.length) {
    return <p className='no-posts'> No cities to show</p>;
  }
  return citiesWeather.map((city) => <CityItem city={city} key={city.id} />);
};
const mapStateToProps = (state) => {
  return {
    citiesWeather: state.weather.citiesWeather,
  };
};
export default connect(mapStateToProps, null)(CitiesList);