import React, { useState, useEffect } from "react";
import axios from "axios";

//Ambee api key: dkhp5LiKAwzWMk1wKVO55SNxClRGMfX1r7kkHJ33

function Forecast(props) {
  let [airQ, setAirQ] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.ambeedata.com/latest/by-postal-code",
    params: { postalCode: "22180", countryCode: "US" },
    headers: {
      "x-api-key": "dkhp5LiKAwzWMk1wKVO55SNxClRGMfX1r7kkHJ33",
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setAirQ(res.data.stations);
    });
  }, []);

  // console.log(airQ);

  return (
    <div>
      <h1>Air Quality</h1>
      <h3>
        {airQ[0].placeName},{airQ[0].city}
      </h3>
      <ul>
        <h3>AQI Info:</h3>
        <li>{airQ[0].aqiInfo.category}</li>
        <li>{airQ[0].aqiInfo.concentration}</li>
        <li>{airQ[0].aqiInfo.pollutant}</li>
      </ul>
    </div>
  );
}

export default Forecast;
