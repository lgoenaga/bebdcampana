import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import "../../css/usuariocrear.css";
import { createUsuario } from "../../routes/usuarios";

export function CrearRegistroUsuario() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [valoresForm, setValoresForm] = useState({});

  const {
    user = "",
    password = "",
    rol = "",
    estado = "",
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
      password,
      rol,
      estado,
    };

    try {
      data = await createUsuario(usuario);

      console.log("Usuario creado");
      console.log(data);
      navigate("/usuarios");
    } catch (error) {
      console.log("Usuario no ha sido creado,", error);
    }
  };

  return (
    <>
      <Container className="contenedor-usuarios container">
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicText">
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
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrar un Rol"
              name="rol"
              value={rol}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrar un estado"
              name="estado"
              value={estado}
              onChange={(e) => handleOnChange(e)}
              required
            />
          </Form.Group>
          <Form.Group className="d-flex">
            <Button
              variant="primary"
              onClick={handleOnSubmit}
            >
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
