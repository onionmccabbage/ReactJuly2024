import { useState } from 'react'

import './App.css'
import CreatureRenderer from './components/creature_renderer'

function App() {
  const creatures = [
    { creature: 'Albatros', count: 1, cost: 120.99 },
    { creature: 'Bear', count: 5, cost: 20.99 },
    { creature: 'Carp', count: null, cost: 87.00 },
    { creature: 'Deer', count: 121, cost: 12.99 },
    { creature: 'Elk', count: 42, cost: 3.84 },
    { creature: 'Fawn', count: 1, cost: 23.33 },
  ]

  return (
    <>
      <h3>Creatures In the Zoo</h3>
      <ul>
        {/* item is the iterable member of the array. key is automatically provided */}
        {/* we may need to wait until data exists... */}
        {/* {creatures && creatures.map((item, key) => { // key will be 0, 1, 2 ... */}
        {/* does this work with async data */}
        {creatures?.map((item, key) => { // key will be 0, 1, 2 ...
        {/* or use the ternary operator condition?true:false */}
        // {!creatures? <p>Wait...</p> :creatures.map((item, key) => { // key will be 0, 1, 2 ...
          return (
            // NB React really likes it if you provide a unique key for iterables
            // <li key={key}>{item.creature} {item.cost} {item.count}</li>
            <CreatureRenderer key={key} creature={item} />
          ) // end of return
        } // end of function literal in map
        ) // end of map
        }
      </ul>
    </>
  )
}

export default App
