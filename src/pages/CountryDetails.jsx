import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountries, fetchWeather } from "../services/api";

export default function CountryDetails() {
  const { code } = useParams();

  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchCountries()
      .then((res) => {
        const countries = Array.isArray(res.data) ? res.data : [];
        const found = countries.find((c) => c.cca3 === code);
        setCountry(found);

        if (found?.capital?.[0]) {
          fetchWeather(found.capital[0])
            .then(setWeather)
            .catch(() => {});
        }
      })
      .catch(() => setCountry(null));
  }, [code]);

  if (!country) return <p>Loading country...</p>;

  return (
    <div className="details">
      <img src={country.flags.svg} alt={country.name.common} />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Languages: {Object.values(country.languages || {}).join(", ")}</p>
      <p>Currencies: {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>

      {weather && (
        <div className="weather">
          <h3>Weather</h3>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed}</p>
        </div>
      )}
    </div>
  );
}
