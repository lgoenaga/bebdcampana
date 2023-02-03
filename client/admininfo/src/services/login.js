import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import logo from "../img/logo.png";

import { getUsuario } from "../routes/login";

function Login() {

  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [valoresForm, setValoresForm] = useState({});

  const { user = "", password = "" } = valoresForm;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const mostrarusuario = async () => {

    const {data} = await getUsuario(user);

      if (data.user === user) {
        console.log("Usuario autorizado");
        navigate("/inicio");
      } else {
        console.log("Datos no coinciden");
      }

  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setValidated(true);

    await mostrarusuario();

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
            <Button
              variant="primary"
              className="boton"
              onClick={handleOnSubmit}
            >
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
