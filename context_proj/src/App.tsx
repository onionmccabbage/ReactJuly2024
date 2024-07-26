import { useState } from 'react'

import './App.css'
import Section from './components/Section'
import Heading from './components/Heading'

function App() {


  return (
    <>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading> 
            <Section level={4}>
              <Heading>Minor-Heading</Heading>
              <Heading>Minor-Heading</Heading>
              <Heading>Minor-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}

export default App
