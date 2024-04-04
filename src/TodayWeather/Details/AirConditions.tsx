import { getMonthAndDay } from "../../utils/getMonthAndDay";
import { BsThermometer } from "react-icons/bs";
import { BsWind } from "react-icons/bs";

// current weather
const Details = ({ data }) => {
  console.log({ data });
  const date = getMonthAndDay(data.dt);
  console.log(date);
  return (
    <div>
      <h4>Air Conditions</h4>
      <div style={{ display: "flex" }}>
        <div style={{ paddingLeft: 12 }}>
          <BsThermometer /> <span>Feels Like</span>
          <p style={{ margin: 0 }}>{data.main.feels_like}</p>
        </div>

        <div style={{ paddingLeft: 12 }}>
          <BsWind /> <span>Wind</span>
          <p style={{ margin: 0 }}>{data.wind.speed}</p>
        </div>

        <div style={{ paddingLeft: 12 }}>
          <BsWind /> <span>Clouds</span>
          <p style={{ margin: 0 }}>{data.clouds?.all} %</p>
        </div>

        <div style={{ paddingLeft: 12 }}>
          <BsWind /> <span>Humidity</span>
          <p style={{ margin: 0 }}>{data.main?.humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
