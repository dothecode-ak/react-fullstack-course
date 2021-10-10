import React,{useState} from "react";
import { Table } from "react-bootstrap";
const Form = () => {
    const [user] = useState([
        { name: "Anil", address: "Bangalore" },
        { name: "Sunil", address: "Ballia" },
        { name: "Gudiya", address: "Mumbai" },
        { name: "Sarita", address: "Nagra" }
    ])
    return ( <>
    <h1>Table</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.N.</th>
      <th>Name</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
{
    user.map((user,i)=>
    <tr key={i}><td>{i+1}</td><td>{user.name}</td><td>{user.address}</td></tr>
    
    )
}
     </tbody>
</Table>
    </>);
}
 
export default Form;