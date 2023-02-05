import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { valiteUser } from "../routes/login";



export default function Loguin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


const handleSubmit = (e) => {
  // prevent the form from refreshing the whole page
  e.preventDefault();

  try {
    valiteUser();
    // make a popup alert showing the "submitted" text
    alert("Submited");
  } catch (error) {
    console.log('Ocurrio un error ', error);
  }
  valiteUser();
};

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* user */}
        <Form.Group controlId="formBasicUser">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter user"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
    </>
  );
}
