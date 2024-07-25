import { useEffect, useState } from "react"
// by convention hooks start with 'use'
// const useWeatherData = (location)=>{
    const useWeatherData = (location)=>{
    let defaultWeatherObj = {"coord":{"lon":0.0,"lat":0.0},"weather":[{"id":0,"main":"","description":"","icon":"04d"}],"base":"stations","main":{"temp":0,"feels_like":0,"temp_min":0,"temp_max":0,"pressure":0,"humidity":0,"sea_level":0,"grnd_level":0},"visibility":0,"wind":{"speed":0,"deg":0},"clouds":{"all":0},"dt":0,"sys":{"type":2,"id":2005211,"country":"GB","sunrise":1721880296,"sunset":1721938229},"timezone":3600,"id":2645425,"name":"","cod":200}
    const [weatherData, setWeatherData] = useState(defaultWeatherObj)
    const apiKey = `48f2d5e18b0d2bc50519b58cce6409f1` // good for 60 requests per second
    const city = location.city
    const country = location.country
    useEffect( ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${apiKey}`)
            .then((response)=>response.json())
            .then((data)=>setWeatherData(data))
            .catch((error)=>console.error(`Problem: ${error}`))
    }, [apiKey, city, country]) 
    // we can now return the retrieved data
    return weatherData
}


export default useWeatherData