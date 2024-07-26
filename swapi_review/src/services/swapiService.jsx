import { useEffect, useState } from "react"
// by convention hooks start with 'use'
    const useSwapiData = (entity)=>{
        // refine this
    let defaultSwapiObj = {}
    const [swapiData, setSwapiData] = useState(defaultSwapiObj)
    const category = entity.category
    const id = entity.id
    // debugger; // set a break point
    useEffect( ()=>{
        fetch(`https://swapi.dev/api/${category}/${id}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                return setSwapiData(data)})
            .catch((error)=>console.error(`Problem: ${error}`))
    // we probably dont need to depend on APIKEY
        }, [category, id]) 
    // we can now return the retrieved data
    return swapiData
}


export default useSwapiData