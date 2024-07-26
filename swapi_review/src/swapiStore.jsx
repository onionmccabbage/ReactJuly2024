import localforage from "localforage"

export async function getSwapis() {
  let swapis = await localforage.getItem("swapis")
  if (!swapis) swapis = []
  return swapis
}

export async function createSwapi({ category, id }) {
  let swapi = { category, id }
  let swapis = await getSwapis()
  swapis.unshift(swapi)
  await set(swapis)
  return swapi
}

export async function getSwapi(id) { // or id
  let swapis = await localforage.getItem("swapis")
  let swapi = swapis.find((swapi) => swapi.id === id)
  return swapi ?? null
}

export async function deleteSwapi(city) {
  let swapis = await localforage.getItem("swapis")
  // let index = swapis.findIndex((swapi) => swapi.category === category)
  // if (index > -1) {
  //   swapis.splice(index, 1)
  //   await set(swapis)
  //   return true
  // }
  return false
}

function set(swapis) {
  return localforage.setItem("swapis", swapis)
}
