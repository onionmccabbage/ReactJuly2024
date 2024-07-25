import { useCallback } from "react"
import useWeatherData from "../services/weatherService"

const WeatherList = ({ city, country }) => {
    // we can use our custom hook (let the service manage the stateful values)
    // const weatherData = useCallback(useWeatherData({ city: city, country: country }), [city, country])
    const weatherData = useWeatherData({ city: city, country: country })

    return (
        <>
        {/* <pre>{JSON.stringify(weatherData)}</pre> */}
            <ul>
                <li>Weather: {weatherData.weather[0].description}</li>
                <li>Temperature: {weatherData.main.temp}&deg;C</li>
                <li>Wind: {weatherData.wind.speed}</li>
            </ul>
        </>)
}

export default WeatherList