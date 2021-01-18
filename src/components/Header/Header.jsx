import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/tornado.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt='logotype' />
        <h1>
          <Link to='/'>CYCLONES</Link>
        </h1>
      </div>
      <div>
        <h1>
          <a href='https://github.com/tsukiyyyomi'>Github</a>
        </h1>
      </div>
    </header>
  );
};
export default Header;
