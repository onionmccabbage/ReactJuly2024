import { useState } from "react"

// we may declare other components like this
const MyButton = ()=>{
    // we may choose to declare some local model for our data
    // let count = 0
    // ...but it is recommended to use state, so React can understand the model data
    // we always declare [ourVariable, methodToChangeState]
    const [count, setCount] = useState(0) // we can set an initial value for our variable
    // we need an event listener for when the button gets clicked
    const handleClick = ()=>{
        // call the method that will create new value for 'count'
        // since in React 'count' is immutable, we throw away the old variable and make a new one
        setCount( count+1 ) // NB 'count' 
    }

    // we are obliged to have a return statement inside a component
    return (
        // NB this is a React onClick (not an HTML one)
      <button onClick={handleClick} >{count}</button>
    )
  }
// we need to export this compoent so we can import it elsewhere
export default MyButton