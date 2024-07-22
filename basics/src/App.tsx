import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// NB React uses initial cap for any elemnt that is React-specific
const App=()=>{ // or function App(){}
  const [count, setCount] = useState(0)
  // model data
  let a = 1 // JS declaration of a varible (mutable)
  const b = 'Hello' // immutable
  const c = {n:'Ethel', a:42, status:'admin'} // a JS Object

  // function - many ways to declare 
  function fnA(x:number, y:number){ // declare types for Typescript
    return x+y
  }
  const fnB = (x:number, y:number)=>{    return x*y  }
  // if there is only one line we do not need {return}
  const fnC = (x:number, y:number)=>  x*y




  return (
    <>
    {/* here is some JSX (TSX) it looks like HTML - this code will generate some HTML for us */}
      <header></header>
      <nav></nav>
      <article>
        <section>
          {/* we may inject any data or statement into {}  */}
          <h3>{b} and Welcome to React</h3>
          <p>{c.n} {c.a} {c.status}</p>
          {/* we may find JS objects inside a React binding {{}} */}
          {/* <p>{{cost:55.5}}</p> */}
        </section>
      </article>
      <footer></footer>
    </>
  )
}

export default App
