import { useState } from "react"
import MyButton from "./MyButton"


const ButtonPanel = () => {

    // we always declare [ourVariable, methodToChangeState]
    const [count, setCount] = useState(0) // we can set an initial value for our variable
    // we need an event listener for when the button gets clicked

    const handleClick = (event:any)=>{
        event.stopPropagation() // prevent the event from happeninig on any parent

        // we may wish to write some debug code
        console.log(event.target.name)


        // call the method that will create new value for 'count'
        // since in React 'count' is immutable, we throw away the old variable and make a new one
        setCount( count+1 ) // NB 'count' 
    }


    // NB every 'return' must contain ONE root element
    return (
        // this is a handy 'root; element that never gets rendered
        <>
            <h3>Here are some buttons</h3>
            {/* we inject properties for handler and state */}
            <MyButton name={'bntA'} handleClick={handleClick} count={count}/>
            <MyButton name={'btnB'} handleClick={handleClick} count={count}/>
        </>
    )
}


export default ButtonPanel