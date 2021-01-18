import styles from "./AddCity.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  searchCityByName,
  searchForecastById,
} from "../../../redux/actions/actions";
import { useState } from "react";

const AddCity = () => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const dispatch = useDispatch();

  const sumbitSearch = (e) => {
    e.preventDefault();
    dispatch(searchCityByName(inputText));
  };
  return (
    <div className={styles.addCity}>
      <h2>Find city:</h2>
      <form onSubmit={sumbitSearch} className={styles.searchField}>
        <input
          placeholder='Search...'
          value={inputText}
          onChange={inputHandler}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  searchCityByName,
};
export default connect(null, mapDispatchToProps)(AddCity);
