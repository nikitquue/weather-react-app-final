import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import DayItem from "../DayItem/DayItem";
import { searchForecastById } from "../../../redux/actions/actions";
import { useLocation } from "react-router-dom";
import styles from "./DaysList.module.css";

const DaysList = ({ days }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const cityID = location.pathname.substr(10);    
    dispatch(searchForecastById(cityID));
  }, []);

  if (!days.length) {
    return <p>Loading...</p>;
  }
  return days.map((day, ind) => (
    <div className={styles.daysWrapper} key={ind}>
      <h3>{day[ind].dt_txt.substr(0, 10)}</h3>
      <DayItem day={day} key={ind} />
    </div>
  ));
};

const mapStateToProps = (state) => {
  return {
    days: state.forecast.days,
  };
};
const mapDispatchToProps = {
  searchForecastById,
};
export default connect(mapStateToProps, mapDispatchToProps)(DaysList);
