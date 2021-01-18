import AddCity from "./AddCity/AddCity";
import CitiesList from "./CitiesList/CitiesList";

const WeatherPage = () => {
  return (
    <div>
      <h1>Weather</h1>
      <AddCity />
      <CitiesList />
    </div>
  );
};

export default WeatherPage;
