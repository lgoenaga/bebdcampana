import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import logo from "../img/logo.png";

import { getUsuario } from "../routes/login";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  const [validated, setValidated] = useState(false);
  const [valoresForm, setValoresForm] = useState({});

  const { user = "", password = "" } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  useEffect(() => {
    const mostrarusuario = async () => {
      try {
        const { data } = await getUsuario(user);
        setUsuario(data);
      } catch (error) {
        console.log("Usuario no existe");
      }
    };
    mostrarusuario();
  }, [user]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (usuario.user === user) {
      console.log("Usuario Autorizado");
      navigate("/");
    } else {
      console.log("Datos Incorrectos");
    }
  };

  return (
    <Container>
      <Col>
        <Form className="FormLogin" noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicUser">
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
            <Form.Text className="text-muted">
              Never share your password with anyone.
            </Form.Text>
          </Form.Group>

          <Form.Group className="button-login">
            <Button variant="primary" onClick={handleOnSubmit}>
              Enviar
            </Button>
          </Form.Group>
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
