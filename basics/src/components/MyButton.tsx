import { useState } from "react"

// we may declare other components like this
// we may pss in one argument ot the React component function
// either a single value or else an object
const MyButton = ({handleClick, count, name}:{handleClick:any, count:number, name:string})=>{
    // we may choose to declare some local model for our data
    // let count = 0
    // ...but it is recommended to use state, so React can understand the model data

    // we are obliged to have a return statement inside a component
    return (
        // NB this is a React onClick (not an HTML one)
      <button name={name} onClick={handleClick} >{count}</button>
    )
  }
// we need to export this compoent so we can import it elsewhere
export default MyButton