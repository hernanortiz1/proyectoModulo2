import error from "../../assets/imgError404/error404img.png";
import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5} sm={12} className="mb-4 mb-md-0 text-center text-md-start">
          <img src={error} alt="error 404" className="img-fluid rounded-3" />
        </Col>

        <Col
          md={7}
          sm={12}
          className="d-flex flex-column justify-content-center text-center text-md-start"
        >
          <p className="display-4">
            La página que intentas solicitar no está en el servidor
          </p>
          <p className="display-4">
            <b>(Error 404)</b>
          </p>
          <Link to="/" className="btn btn-primary fs-5 mt-4">
            Volver al inicio
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
