// we can declare a custom hook if we want to 
// encapsulate data-retrieval in a service
import { useEffect, useState } from "react"
// by convention hooks start with 'use'
const usePhotoData = ()=>{
    const [photoData, setPhotoData] = useState([])
    // we can use a normal useEffect hook...
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response)=>response.json())
            .then((data)=>setPhotoData(data))
            .catch((error)=>console.error(`Problem: ${error}`))
    }, []) // will run on component first render

    // we can now return the retrieved data
    return photoData
}
export default usePhotoData