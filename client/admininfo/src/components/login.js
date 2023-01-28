import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import logo from "../img/logo.png";
import "../css/login.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [valoresForm, setValoresForm] = useState({});

  const {
    user = "",
    password = "",
  } = valoresForm;

    const handleOnChange = ({ target }) => {
      const { name, value } = target;
      setValoresForm({ ...valoresForm, [name]: value });
    };

    const handleOnSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    let data = "";

    const usuario = {
      user,
      password
    }

  }

  return (
    <Container>
      <Col>
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrar Usuario"
              name="user"
              value={user}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Form.Group>
          <Form.Text className="text-muted">
            Never share your password with anyone.
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={handleOnSubmit}>
            Enviar
          </Button>
        </Form>
      </Col>
      <Col>
        <img
          className="LogoLogin "
          src={logo}
          alt="Logo"
          style={{
            height: 200,
          }}
        />
      </Col>
    </Container>
  );
}

export default Login;
