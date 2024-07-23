import { Fragment, useEffect, useState } from 'react'

import './App.css'
import Cat from './components/Cat'
import getCats from './services/catService'
import CatsB from './components/CatsB'

function App() {
  // we need a mechanism to retrieve API data
  const [cats, setCats] = useState([]) // start with an empty array
  const [smallCats, setSmallCats] = useState([])
  const [chooseWidth, setChooseWidth] = useState(700)
  const changeWhichCats = (num:number)=>{ // num will be the chosen width 
    setSmallCats(cats.filter((cat:any)=>  cat.width < num))
  }

  // we cannot tell what may be retured, so our function is no longer pure
  // useEffect is for handling these side-effects
  useEffect( () => {
    debugger; // this will set a break point when run with the React dev tools
    // promises are 'thenable'
    // this catapi returns an evolving stream of data
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => { return response.json() })
      .then((data) => {
        // handle the returned data
        setCats(data) // we return the retrieved JSON data
      })
    // setCats( getCats())
    // [] means only fetch when the component is first rendered
  }, [])

  // form field handler methods
  const handleRangeChange = ()=>{
    setChooseWidth(event?.target.value) // same as always
    // now apply this value to our setSmallCats
    changeWhichCats(event?.target.value) // can we use the chooseWidth here...?
  }

  return (
    <>
    {/* any static assets MUST live inside the assets folder */}
    <img src='assets/react.svg' alt='this is the react image' />
      <CatsB />
      <h3>Here are some assets from a remote API</h3>
      <p>We can retrieve REST data from any visible API</p>
      {/* this is a handy way to see the entire returned data */}
      {/* NB don't do this in production */}
      {/* <pre>{JSON.stringify(cats)}</pre> */}
      {/* we need a contolled form field to specify filter parameter */}
    <form>
      <label>
      {chooseWidth}  
      <input onChange={handleRangeChange} value={chooseWidth} type='range' min='500' step='100' max='2000' />
      </label>
    </form>
    {/* cat.map will map every cat to a rendition */}
      {smallCats?.map((cat: any) => {

        return (
          <Fragment key={cat.id}>
            <Cat cat={cat} />
          </Fragment>
        )
      })}

    </>
  )
}

export default App
