import localforage from "localforage"

export async function getWeathers() {
  let weathers = await localforage.getItem("weathers")
  if (!weathers) weathers = []
  return weathers
}

export async function createWeather({ city, country }) {
  let id = Math.random().toString(36).substring(2, 9)
  let weather = { id, city, country }
  let weathers = await getWeathers()
  weathers.unshift(weather)
  await set(weathers)
  return weather
}

export async function getWeather(city) {
  let weathers = await localforage.getItem("weathers")
  let weather = weathers.find((weather) => weather.city === city)
  return weather ?? null
}

export async function deleteWeather(city) {
  let weathers = await localforage.getItem("weathers")
  let index = weathers.findIndex((weather) => weather.city === city)
  if (index > -1) {
    weathers.splice(index, 1)
    await set(weathers)
    return true
  }
  return false
}

function set(weathers) {
  return localforage.setItem("weathers", weathers)
}
