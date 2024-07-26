import { useEffect, useState } from "react";
function Swapi() {
    const [params, setParams] = useState({ city: 'hull' })
    const [weatherUrl, setWeatherUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&units=metric&APPID=${apiKey}`)
    const [data, setData] = useState({weather:[{description:''}], main:{temp:12}})
    const handleParams = (event) => {
        setParams({ ...params, city: event.target.value })
    }

    useEffect( 
        () => {
            fetch(weatherUrl)
                .then(response => response.json())
                .then((data) => {
                    setData(data)
                })
        }, [weatherUrl]
    )

    const getData = () => {
        setWeatherUrl(`https://api.openweathermap.org/data/2.5/weather?q=${params.city},${params.country}&units=metric&APPID=${apiKey}`)
    }
    if (!data) return <div>Loading...</div>
    return (
        <div>
            <pre>{JSON.stringify(data)}</pre>

            <h2>Review Lab: Weather App</h2>
            <input placeholder="City" required name="city" 
                value={params.city}
                onChange={handleParams} />
            <button onClick={getData}>Go</button>
            <h4>Weather: {data.weather[0].description}</h4>
            <p>Temperature: {data.main.temp}&deg;C</p>
        </div>
    )
}

export default Weather