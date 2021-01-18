import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCityById, updateCityById } from "../../../redux/actions/actions";
import styles from "./CityItem.module.css";

const CityItem = ({ city }) => {
  const dispatch = useDispatch();
  const deleteCity = () => {
    dispatch(deleteCityById(city.id));
  };
  const updateCity = () => {
    dispatch(deleteCityById(city.id));
    dispatch(updateCityById(city.id));
  };
  return (
    <div className={styles.cityItem}>
      <div className={styles.cityHeadingWrap}>
        <div className={styles.cityNameContainer}>
          <h3>
            {city.name}, {city.sys.country}
          </h3>
          <img
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt='weather icon'
          />
        </div>

        <div>
          <button onClick={() => updateCity()}>Update</button>
          <button onClick={() => deleteCity()}>Delete</button>
        </div>
      </div>

      <div className={styles.infoWrapper}>
        <h4>{Math.round(city.main.temp)} &deg;C</h4>
      </div>
      <button>
        <Link to={`/forecast/${city.id}`}>Details</Link>
      </button>
    </div>
  );
};
const mapDispatchToProps = {
  deleteCityById,
  updateCityById,
};
export default connect(null, mapDispatchToProps)(CityItem);