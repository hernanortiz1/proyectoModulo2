import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
const Registro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va la lógica para enviar el formulario
    console.log("Formulario enviado");
  };

  return (
    <section>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h3 className="text-center mb-4">Registro</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" required />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Crea una contraseña" required />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-4">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Repite la contraseña" required />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Registrarse
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registro;
