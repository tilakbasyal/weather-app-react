import { getMonthAndDay } from "../../utils/getMonthAndDay";

// current weather
const Details = ({ data }) => {
  console.log({ data });
  const date = getMonthAndDay(data.dt);
  console.log(date);
  return (
    <div>
      <h4>Current Weather</h4>
      <div style={{ display: "flex" }}>
        <div style={{ paddingLeft: 12 }}>
          <h4 style={{ margin: 0 }}>{data.name}</h4>
          <p style={{ margin: 0 }}>{date}</p>
        </div>

        <div style={{ paddingLeft: 12 }}>
          <h4 style={{ margin: 0 }}>{data.main.temp}</h4>
          <p style={{ margin: 0 }}>{data.weather[0].description}</p>
        </div>

        <div style={{ paddingLeft: 12 }}>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt={data.weather[0].description}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
