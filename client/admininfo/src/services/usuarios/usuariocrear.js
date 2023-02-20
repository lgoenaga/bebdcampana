import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { createUsuario } from "../../routes/usuarios";
import { AuthHeaders } from "../../components/authheader";

export function CrearRegistroUsuario() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [valoresForm, setValoresForm] = useState({});
  const [errors, setErrors] = useState({});

  const authheader = AuthHeaders();

  const { user = "", password = "", rol = "", estado = "" } = valoresForm;

  const findFormErrors = () => {
    const { user, password, rol, estado } = valoresForm;
    const newErrors = {};

    if (!user || user === "") newErrors.name = "cannot be blank!";

    if (!rol || rol === "") newErrors.rol = "select a rol!";

    if (!password || password === "") {
      newErrors.password = "cannot be blank!";
    } else {
      if (password.length <= 4)
        newErrors.password = "Password too short! Minimum 4 characters";
    }

    if (!estado || estado === "") newErrors.estado = "select a state!";

    return newErrors;
  };

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({ ...valoresForm, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
      data = await createUsuario(usuario, authheader);

      console.log("Usuario creado");
      console.log(data);
      navigate("/usuarios");
    } catch (error) {
      console.log("Usuario no ha sido creado,", error);
    }
  };

  return (
    <>
      <Container className="contenedor-usuarios container-fluid ">
        <Form noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>User</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrar Usuario"
              name="user"
              value={user}
              onChange={(e) => handleOnChange(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              minLength="4"
              onChange={(e) => handleOnChange(e)}
              required
            />
            <Form.Text className="text-muted">
              Never share your password with anyone.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRol">
            <Form.Label>Rol</Form.Label>
            <select
              className="form-select"
              name="rol"
              required
              value={rol}
              onChange={(e) => handleOnChange(e)}
            >
              <option value=""> Open this select menu</option>
              <option value="Administrador">Administrador</option>
              <option value="Consultor">Consultor</option>
              <option value="Editor">Editor</option>
            </select>
            <Form.Control.Feedback type="invalid">
              {errors.rol}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEstado">
            <Form.Label>State</Form.Label>
            <select
              className="form-select"
              name="estado"
              required
              value={estado}
              onChange={(e) => handleOnChange(e)}
            >
              <option value=""> Open this select menu</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <Form.Control.Feedback type="invalid">
              {errors.estado}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="d-flex">
            <Button variant="primary" onClick={handleOnSubmit}>
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
