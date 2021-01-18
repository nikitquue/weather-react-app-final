import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import ForecastPage from "./components/ForecastPage/ForecastPage";
import styles from "./App.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact render={WeatherPage} />
          <Route path='/forecast/:id' exact render={ForecastPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
