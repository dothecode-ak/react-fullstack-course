import React from 'react';  
import axios from 'axios';  
export default class Axioxdata extends React.Component {  
  state = {  
    persons: [ ]  
  }  
getData() {  
    axios.get(`https://jsonplaceholder.typicode.com/users`)  
      .then(res => {  
        const users = res.data;  
        this.setState({ users });
        console.log(users);
      })  
  }  

  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>Get</button>
      </div>
    );
  }
  
  
}