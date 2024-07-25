import { useState } from 'react'
import './App.css'

// CSS 
// tag styles apply automatically to every tag (override the default style)
// class styles beat tag styles. Class styles must be manually applied anywhere
// id styles beat class styles. Tag styles must be manually applied ONCE

// we need styled-components
import styled from 'styled-components'
//  we can declare the style for our custom component
// even if they don't actually exist as tsx files
// NB this might be better in a separate imported module
const Container = styled.article`
  border: 8px solid;
  display:flex;
  flex-direction:column;
`
const Header = styled.section`
  padding: 10px 20px;
  text-align: center;
  color:#c0ffee;  
`
const H1 = styled.h1`
  background-color: #369;
`

function App() {

  return (
    <>
    {/* our Container will inherit the style of <article> */}
      <Container>
        <Header>Todo</Header>
        <H1>Here is a heading</H1>
      </Container>
    </>
  )
}

export default App
