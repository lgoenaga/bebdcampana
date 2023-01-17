import React from "react";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../css/datospersonales.css";

function DatosPersonales() {
  return (
    <>
      <Container className="contenedor-datosPersonales">
        <Form className="formDatosPersonales">
          <Form.Label>Datos Personales</Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCedula">
              <Form.Label>Cédula</Form.Label>
              <Form.Control type="text" placeholder="Entrar Cédula" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridBirthDate">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control type="date" placeholder="Fecha de Nacimiento" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control type="text" placeholder="Primer Nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSecondName">
              <Form.Label>Segundo Nombre</Form.Label>
              <Form.Control type="text" placeholder="Segundo Nombre" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFisrtSurname">
              <Form.Label>Primer Apellido</Form.Label>
              <Form.Control type="text" placeholder="Primer Apellido" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSecondSurname">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control type="text" placeholder="Segundo Apellido" />
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Container className="contenedorContactoUbicacion">
        <Form className="formDatosContacto">
          <Form.Label>Datos de Contacto</Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCelular">
              <Form.Label>Teléfono celular</Form.Label>
              <Form.Control type="text" placeholder="Teléfono Celular" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTelefono">
              <Form.Label>Teléfono fijo</Form.Label>
              <Form.Control type="text" placeholder="Teléfono fijo" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Correo electrónico"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFacebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control type="text" placeholder="Facebook" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridInstagram">
              <Form.Label>Instagram</Form.Label>
              <Form.Control type="text" placeholder="Instagram" />
            </Form.Group>
          </Row>
        </Form>
        <Form className="formDatosUbicacion">
          <Form.Label>Datos de Ubicacion</Form.Label>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCelular">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dirección"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTelefono">
              <Form.Label>Barrio / Vereda</Form.Label>
              <Form.Control
                type="text"
                placeholder="Barrio / Vereda"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Urbanización / otros datos de ubicación</Form.Label>
              <Form.Control
                type="text"
                placeholder="Urbanización / otros datos de ubicación"
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
      <Container className="button">
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Container>
    </>
  );
}

export default DatosPersonales;
