
import styled from 'styled-components';
import './App.css';
import CounterFunc from './redux-toolkit/counter';
import Common from './coomon';
import Form from './redux-toolkit/Form';
import Axioxdata from './ajax/axios';
function App(user) {
  const Heading=styled.h1`
  color:red;
  text-align:center
  `
  return (
    <div className="App">
      <Heading>Example of react toolkit 2021- {user.name}</Heading>
      <CounterFunc />
      <Form/>
      <Common/>
 <Axioxdata/>
    </div>
  );
}

export default App;
