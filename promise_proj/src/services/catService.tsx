import { useState } from "react"

const apiCall = async () => {
    await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => { return response.json() })
        .then((data) => {
            // handle the returned data
            return data
        })
} // end of getCats function

// const getCats = async () => {
//     let r = await apiCall()
//     return r
// }

const getCats = async () => {

    const [cats, setCats] = useState([]);
    const fetchCats = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCats(data[0].id);

        } catch (error) {
            console.error('Error:', error);
        }
    }
    fetchCats().then(
        ()=>{
              return cats
        }
    )
}
export default getCats