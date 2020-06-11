import React from "react";
// import db from "./firebase";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SignUpPage = () => {
  return (
    <Form>
     <Button variant="outline-success" type="submit">
      Log in with Google! 
    </Button>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Write your city name" />
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Profile </Form.Label>
      <Form.Control type="text" placeholder="Write something about you" />
    </Form.Group>
   
    <Button variant="outline-success" type="submit">
      join The Re:Coded facebook! 
    </Button>
  </Form> 
  );
};

export default SignUpPage;

 