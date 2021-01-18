import Hour from "../Hour/Hour";

const DayItem = ({ day }) => {
  return day.map((hour, ind) => (    
      <Hour hour={hour} key={ind} />    
  ));
};

export default DayItem;