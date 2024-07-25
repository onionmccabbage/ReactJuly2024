import { useState } from 'react'
import './App.css'
import ButtonPanel from './components/ButtonPanel'
import Label from './Label'
import Wrapper from './components/Wrapper'
import MyForm from './components/MyForm'
import MyInput from './components/MyInput'
import Todo from './components/MyStyledComp'
import MyDebounce from './components/MyDebounce'
import MyInputDb from './components/MyInputDb'

// NB React uses initial cap for any elemnt that is React-specific
const App = () => { // or function App(){}
  const [count, setCount] = useState(0)
  // model data
  let a = 1 // JS declaration of a varible (mutable)
  const b = 'Hello' // immutable
  const c = { n: 'Ethel', a: 42, status: 'admin' } // a JS Object

  // function - many ways to declare 
  function fnA(x: number, y: number) { // declare types for Typescript
    return x + y
  }
  // in JS everything is an object (including functions)
  // fnB is an identifier that will let us access the ()=>{}
  const fnB = (x: number, y: number) => {
    return x * y
  }
  // if there is only one line we do not need {return}
  const fnC = (x: number, y: number) => x * y // implicit return

  // in JS we can do this: if there is exactly one incoming argument
  // const fnD = x=>x*x // this is fine is JS but TS complains

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
          {/* <MyButton />  */}
          <ButtonPanel />
          {/* mini challenge 001 */}
          <Wrapper>
            {/* any children may appear here - they will be passed in */}
            {/* NB every Rect component MUST strt with Cap
            ...and every html MUST be lower-case */}
            <Label person={c} />
            <Label person={c} />
          </Wrapper>
          <hr/>
          <MyForm />
          <hr/>
          {/* <MyInput /> */}
          <hr/>
          <MyDebounce />
          {/* <MyInputDb /> */}
          <hr/>
          {/* <Todo /> */}
        </section>
      </article>
      <footer></footer>
    </>
  )
}

export default App


