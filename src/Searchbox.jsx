// SearchBox.js
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";

function Searchbox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4036b8f280168cb290de0ae1ce040dcf"; 

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      // Fetching the 7-day forecast
      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${jsonResponse.coord.lat}&lon=${jsonResponse.coord.lon}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`);
      const forecastJsonResponse = await forecastResponse.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        forecast: forecastJsonResponse.daily, // Include forecast data
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3 style={{
        background: 'linear-gradient(to right, #66a6ff, #89f7fe)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        Search for the weather
      </h3>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br><br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}> No such place exists in API</p>}
      </form>
    </div>
  );
}

export default Searchbox;








