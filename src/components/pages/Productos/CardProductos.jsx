import { Col, Card, Row, Button } from "react-bootstrap";

const CardProductos = () => {
  return (
    <Row className="mb-3 d-flex justify-content-center">
      <Col xs={12} md={4} lg={3} className="mb-3 h-100">
        <Card className="h-100 d-flex flex-column p-0">
          <Card.Img
            variant="top"
            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/extras/SpecAnnounceHeader_D2_YoP_UE_PO_english.jpg?t=1752694037"
            className="img-fluid w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <Card.Text className="flex-grow-1 p-0">
              <ul className="list-unstyled">

                <li>
                  <strong>Precio:</strong> $10.000
                </li>
                <li className="no-break">
                  <strong>Plataforma:</strong> PC, PS5 y Xbox one
                </li>
                <li>
                  <strong>Categoria: </strong>
                  Shooter
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success" className="me-2">
              Ver más
            </Button>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} md={4} lg={3} className="mb-3 h-100">
        <Card className="h-100 d-flex flex-column">
          <Card.Img
            variant="top"
            src="https://www.gamespot.com/a/uploads/scale_tiny/1593/15930215/3548789-unknown.jpg"
            className="img-fluid w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <Card.Text className="flex-grow-1">
              <ul className="list-unstyled">
                <li>
                  <strong>Precio:</strong> $10.000
                </li>
                <li className="no-break">
                  <strong>Plataforma:</strong> PC, PS5 y Xbox one
                </li>
                <li>
                  <strong>Categoria: </strong>
                  RPG
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success" className="me-2">
              Ver más
            </Button>
          </Card.Footer>
        </Card>
      </Col>

      <Col xs={12} md={4} lg={3} className="mb-3 h-100">
        <Card className="h-100 d-flex flex-column">
          <Card.Img
            variant="top"
            src="https://www.gamespot.com/a/uploads/scale_tiny/469/4693985/2330894-2322534-2227554-grand%2Btheft%2Bauto%2Bv.jpg"
            className="img-fluid w-100"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
            <Card.Text className="flex-grow-1">
              <ul className="list-unstyled">
                <li>
                  <strong>Precio:</strong> $10.000
                </li>
                <li className="no-break">
                  <strong>Plataforma:</strong> PC, PS5 y Xbox one
                </li>
                <li>
                  <strong>Categoria: </strong>
                  Mundo abierto
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">
            <Button variant="success" className="me-2">
              Ver más
            </Button>
          </Card.Footer>
        </Card>
      </Col>
      
    </Row>
  );
};

export default CardProductos;
