// npm install --save styled-components
import styled from 'styled-components'

/** AddTodo.js file **/
const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const Header = styled.section`
  padding: 10px 20px;
  text-align: center;
  color: white;
`;
const H1 = styled.h1`
  color: blue;
`
//....
const Todo=()=>{
  
   return (
       <Container>
         <Header>TODO</Header>
         <H1>Here is a heading</H1>
       </Container>
     );
   }

export default Todo