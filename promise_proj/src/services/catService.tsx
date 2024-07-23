import { useState } from "react"

const getCats = async () => {
    const [cats, setCats] = useState([])
     await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => { return response.json() })
        .then((data) => {
            // handle the returned data
            setCats(data) // we return the retrieved JSON data
            return cats
        })
} // end of getCats function
export default getCats