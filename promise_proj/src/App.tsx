import { Fragment, useEffect, useState } from 'react'

import './App.css'
import Cat from './components/Cat'

function App() {
  // we need a mechanism to retrieve API data
  const [cats, setCats] = useState([]) // start with an empty array
  // we cannot tell what may be retured, so our function is no longer pure
  // useEffect is for handling these side-effects
  useEffect( ()=>{
    // promises are 'thenable'
    // this catapi returns an evolving stream of data
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then( (response)=>{return response.json()} )
      .then( (data)=>{
        // handle the returned data
        setCats(data)
      } )
      // [] means only fetch when the component is first rendered
  },[])

  return (
    <>
      <h3>Here are some assets from a remote API</h3>
      <p>We can retrieve REST data from any visible API</p>
      {/* this is a handy way to see the entire returned data */}
      {/* NB don't do this in production */}
      <pre>{JSON.stringify(cats)}</pre>
      {cats.map( (cat:any)=>{
        return (
          <Fragment key={cat.id}>
            <Cat cat={cat} />
          </Fragment>
        )
      } )}
    </>
  )
}

export default App
