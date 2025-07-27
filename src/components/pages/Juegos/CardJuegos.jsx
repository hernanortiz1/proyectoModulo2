import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
const CardJuegos = ({ juegos }) => {
  return (
    <>
      <Col xs={12} md={4} lg={3} className="mb-3 h-100">
        <Card className="h-100 d-flex flex-column p-0 card-hover ">
          <Card.Img
            variant="top"
            src={juegos.imagen}
            alt={juegos.nombreJuego}
            className="img-fluid w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <div className="flex-grow-1 p-0">
              <ul className="list-unstyled">
                <li className="mb-1">
                  <strong>Precio:</strong> ${juegos.precio}
                </li>
                <li className="mb-1">
                  <strong>Categoria:</strong> {juegos.categoria}
                </li>
                <li className="mb-1">
                  <strong>Plataforma:</strong> {juegos.plataforma}
                </li>
              </ul>
            </div>
          </Card.Body>
          <Card.Footer className="text-end">
            <Link className="btn btn-danger" to={"/detalle"}>
              Ver más
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CardJuegos;
