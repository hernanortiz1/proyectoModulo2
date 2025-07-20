import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col d={5} sm={12} className="mb-4 mb-md-0 text-center text-md-start">
          <div class="contenedorLoginVectores">
            <div class="vectorLogin primero"></div>
            <div class="vectorLogin segundo"></div>
            <div class="vectorLogin tercero"></div>
            <div class="vectorLogin cuarto"></div>
          </div>
        </Col>
        <Col md={7} sm={12} className="d-flex flex-column justify-content-center text-center text-md-start">

        </Col>
      </Row>
    </Container>
  );
};

export default Login;
