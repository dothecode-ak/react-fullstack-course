import React, {useState } from "react";
import { Form, Button } from "react-bootstrap";
const FormComponent = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
function  handleForm() {
  let data={name,email,password};
  console.log(data);
}
  return (<><h1 className="text-center">Form</h1>
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={handleForm}>
          Submit
        </Button>
      </Form>
    </div>
  </>);
}

export default FormComponent;