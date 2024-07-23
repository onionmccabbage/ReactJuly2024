const getCats = ()=>{
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((response) => { return response.json() })
    .then((data) => {
        // handle the returned data
        return data // we return the retrieved JSON data
    })
} // end of getCats function
export default getCats