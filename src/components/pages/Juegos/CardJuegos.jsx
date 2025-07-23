import { Col, Card, Row, Button } from "react-bootstrap";
import minecraft from "../../../assets/juegos/minecraft.jpg";
import terraria from "../../../assets/juegos/terraria.jpg";
import zelda from "../../../assets/juegos/zelda.jpg";
import ark from "../../../assets/juegos/ark.jpg";
import RoN from "../../../assets/juegos/RoN.jpg";
import sims from "../../../assets/juegos/sims.jpg";
import avion from "../../../assets/juegos/avion.jpg";
import granja from "../../../assets/juegos/granja.jpg";
import city from "../../../assets/juegos/city.jpg";
import uncharted from "../../../assets/juegos/uncharted.jpg";
import horizon from "../../../assets/juegos/horizon.jpg";
import RD2 from "../../../assets/juegos/RD2.jpg";
import raider from "../../../assets/juegos/raider.jpg";
const CardJuegos = () => {
  return (
    <>
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
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria:</strong> Shooter
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC, PS5 y XBX1/XBXS
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
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src="https://www.gamespot.com/a/uploads/scale_tiny/1593/15930215/3548789-unknown.jpg"
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria:</strong> RPG
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC, PS5 y XBX1/XBXS
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
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src="https://www.gamespot.com/a/uploads/scale_tiny/469/4693985/2330894-2322534-2227554-grand%2Btheft%2Bauto%2Bv.jpg"
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria:</strong> Mundo abierto
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC, PS5 y XBX1/XBXS
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

       <Col xs={12} md={4} lg={3} className="mb-3">
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={zelda}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 ">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    SandBox
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> Nintendo Switch
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

      <Row className="d-flex justify-content-center mb-3">
        <h2 className="display-4">Shooter</h2>
        <hr />
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src="https://w.wallhaven.cc/full/p8/wallhaven-p8zdk9.jpg"
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong>{" "}
                    <span className="text-success fw-bold">Gratis</span>
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Shooter
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src="https://w.wallhaven.cc/full/1k/wallhaven-1k99z3.jpg"
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li>
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li>
                    <strong>Categoria: </strong>
                    Shooter
                  </li>
                  <li>
                    <strong>Plataforma:</strong> PC, PS4/5 y XBX1/XBXS
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src="https://w.wallhaven.cc/full/n6/wallhaven-n6kzq6.jpg"
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Shooter
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC (Windows, Linux, macOS)
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
         <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={RoN}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Shooter
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC , PS5, XBXox Series X/S
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
      <Row className="d-flex justify-content-center mb-3">
        <h2 className="display-4">Sandbox</h2>
        <hr />
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={minecraft}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong>
                    <span>$10.000</span>
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    SandBox
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={terraria}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li>
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li>
                    <strong>Categoria: </strong>
                    SandBox
                  </li>
                  <li>
                    <strong>Plataforma:</strong> PC, PS4/5 y XBX1/XBXS
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={zelda}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    SandBox
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> Nintendo Switch
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={ark}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    SandBox
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC  PS4/PS5, XBXox One/Series X

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
       <Row className="d-flex justify-content-center mb-3">
        <h2 className="display-4">Simulacion</h2>
        <hr />
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={sims}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong>
                    <span>$10.000</span>
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Simulacion
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={avion}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li>
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li>
                    <strong>Categoria: </strong>
                    Simulacion
                  </li>
                  <li>
                    <strong>Plataforma:</strong> PC y XBX1/XBXS
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={granja}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Simulacion
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC  PlayStation 4, 5 y XBXox One, Series X/S
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={city}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Simulacion
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC  PS4/PS5, XBX One/Series X

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
       <Row className="d-flex justify-content-center mb-3">
        <h2 className="display-4">Aventuras</h2>
        <hr />
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={uncharted}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong>
                    <span>$10.000</span>
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Aventuras
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC y PS4/5
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={horizon}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li>
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li>
                    <strong>Categoria: </strong>
                    Aventura
                  </li>
                  <li>
                    <strong>Plataforma:</strong> PC y PS4/5
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={RD2}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Aventura
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC , PS4/5 y XBX1/XS
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
        <Col xs={12} md={4} lg={3}>
          <Card className="h-100 d-flex flex-column p-0">
            <Card.Img
              variant="top"
              src={raider}
              className="img-fluid w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between h-100">
              <Card.Text className="flex-grow-1 p-0">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <strong>Precio:</strong> $10.000
                  </li>
                  <li className="mb-1">
                    <strong>Categoria: </strong>
                    Aventura
                  </li>
                  <li className="mb-1">
                    <strong>Plataforma:</strong> PC, PS3/4 y XBXX360/One

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
    </>
  );
};

export default CardJuegos;
