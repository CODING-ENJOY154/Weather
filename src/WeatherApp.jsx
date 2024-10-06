import SearchBox from "./Searchbox"
import InfoBox from "./InfoBox";
import { useState } from "react";
import Marquee from 'react-fast-marquee';

import { FaCloudSun, FaMapMarkerAlt, FaTemperatureHigh, FaBell } from 'react-icons/fa';
function WeatherApp(){
const [weatherInfo,setWeatherInfo]=useState({
    city:"Wonderland",
    temp:25.05,
    humidity:47,
    tempMin:25.6,
    tempMax:25.05,
    feelslike:24.84,
});

let updateInfo =(newinfo)=>{
setWeatherInfo(newinfo);
}

return(
<div style={{textAlign:"center"}} >

<Marquee gradient={false} speed={50}>
      <h3 style={{ color: "blueviolet", display: "flex", alignItems: "center" }}>
        <FaCloudSun style={{ marginRight: "10px" }} /> Weather App
      </h3>
      <p style={{ margin: "0 40px", color: "#000", display: "flex", alignItems: "center" }}>
        <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Real-time weather updates from major cities!
      </p>
      <p style={{ margin: "0 40px", color: "green", display: "flex", alignItems: "center" }}>
        <FaTemperatureHigh style={{ marginRight: "10px" }} /> Check current temperatures, forecasts, and more!
      </p>
      <p style={{ margin: "0 40px", color: "orange", display: "flex", alignItems: "center" }}>
        <FaBell style={{ marginRight: "10px" }} /> Stay informed with live weather alerts!
      </p>
    </Marquee>










<SearchBox updateInfo={updateInfo}/>
<InfoBox info={weatherInfo}/>

</div>
);
}
export default WeatherApp;