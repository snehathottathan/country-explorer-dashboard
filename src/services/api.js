/**
 * @Author Sneha T
 * component for api calls
 */
import axios from "axios";

/**
 * Api to list all countries
 */

export const fetchCountries = async()=>{

  const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,subregion,population,languages,currencies,timezones')

  return response;
}

/**
 * open wather api fetching
 * @param {*} city 
 * @returns 
 */

export const fetchWeather = async(city)=>{

    let APP_KEY = process.env.REACT_APP_WEATHER_KEY

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_KEY}`)

  return response.data;
}








