import React from "react";
import {Button, Form} from "react-bootstrap";

export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicText">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Enter User" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
