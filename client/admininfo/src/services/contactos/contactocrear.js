import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { createCiudadano } from "../../routes/contactos";

export function CrearRegistroCiudadano() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [valoresForm, setValoresForm] = useState({});

  const {
    identification = "",
    firstName = "",
    secondName = "",
    firstSurname = "",
    secondSurname = "",
    dateBirth = "",
    cellPhone = "",
    phone = "",
    email = "",
    facebook = "",
    instagram = "",
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

    const ciudadano = {
      identification,
      firstName,
      secondName,
      firstSurname,
      secondSurname,
      dateBirth,
      cellPhone,
      phone,
      email,
      facebook,
      instagram,
    };

    try {
      data = await createCiudadano(ciudadano);

      console.log("Usuario creado");
      console.log(data);
      navigate("/contactos");
    } catch (error) {
      console.log("Usuario no ha sido creado,", error);
    }
  };

  return (
    <>
      <Container className="Formulario-Contactos">
        <Container className="contenedor-datosPersonales ">
          <Form
            className="formDatosPersonales"
            noValidate
            validated={validated}
          >
            <Form.Label>Datos Personales</Form.Label>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridCedula">
                <Form.Label>Cédula</Form.Label>
                <Form.Control
                  className="entrada-datos"
                  type="text"
                  placeholder="Entrar Cédula"
                  name="identification"
                  value={identification}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  No puede estar vacio
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridBirthDate">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control
                  placeholder="Fecha de Nacimiento"
                  name="dateBirth"
                  type="date"
                  value={dateBirth}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Primer Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Primer Nombre"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  No puede estar vacio
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridSecondName">
                <Form.Label>Segundo Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Segundo Nombre"
                  name="secondName"
                  value={secondName}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridFisrtSurname">
                <Form.Label>Primer Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Primer Apellido"
                  name="firstSurname"
                  value={firstSurname}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  No puede estar vacio
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSecondSurname">
                <Form.Label>Segundo Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Segundo Apellido"
                  name="secondSurname"
                  value={secondSurname}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
            </Row>
          </Form>
        </Container>
        <Container className="contenedorContactoUbicacion">
          <Form className="formDatosContacto" noValidate validated={validated}>
            <Form.Label>Datos de Contacto</Form.Label>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridCelular">
                <Form.Label>Teléfono celular</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono Celular"
                  name="cellPhone"
                  value={cellPhone}
                  onChange={(e) => handleOnChange(e)}
                  min="10"
                  max="10"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  No puede estar vacio
                </Form.Control.Feedback>
                <Form.Control.Feedback type="required">
                  Debe tener minimo 10 digitos y ser solo numeros
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridTelefono">
                <Form.Label>Teléfono fijo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono fijo"
                  name="phone"
                  value={phone}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  name="email"
                  value={email}
                  onChange={(e) => handleOnChange(e)}
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridFacebook">
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Facebook"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridInstagram">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Instagram"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => handleOnChange(e)}
                />
              </Form.Group>
            </Row>
          </Form>
          <Form className="formDatosUbicacion">
            <Form.Label>Datos de Ubicacion</Form.Label>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Dirección" />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridBarrio">
                <Form.Label>Barrio / Vereda</Form.Label>
                <Form.Control type="text" placeholder="Barrio / Vereda" />
              </Form.Group>
            </Row>
            <Row className="mb-3 fila-data">
              <Form.Group as={Col} controlId="formGridUrbanizacion">
                <Form.Label>Urbanización / otros datos de ubicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Urbanización / otros datos de ubicación"
                />
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Container>
      <Container className="button-contactos">
        <Button variant="primary" onClick={handleOnSubmit}>
          Guardar
        </Button>
      </Container>
    </>
  );
}
