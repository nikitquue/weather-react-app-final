import styles from "./Hour.module.css";

const Hour = ({ hour }) => {
  const avgTemp = () => {
    return Math.floor(hour.main.temp) / 8;
  };
  const diff = hour.main.temp - avgTemp();

  return (
    <div className={styles.hourBlock}>
      <div className={styles.hourWrap}>
        <div
          className={styles.temperature}
          style={{ marginTop: `${-diff * 5 + 50}px` }}
        >
          {Math.round(hour.main.temp)}&deg;C
        </div>
        <div className={styles.hour}>{hour.dt_txt.substr(11, 5)}</div>
      </div>
    </div>
  );
};
export default Hour;
