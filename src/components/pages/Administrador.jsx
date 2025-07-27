import { Table, Container, Button, Form, Row, Col } from "react-bootstrap";
import ItemJuegos from "./Juegos/ItemJuegos";
import { Link } from "react-router";
import { juegosPrueba } from "../../data/juegosPrueba";
const Administrador = ({ setJuegos, juegos, borrarJuego }) => {
  const cargarJuegos = () => {
    setJuegos(juegosPrueba);
  };
  return (
    <>
      <Container className="my-2">
        <div className="mt-5">
          <Row className="gy-3 align-items-center">
            <Col xs={12} lg={4} className="text-center text-lg-start">
              <h1 className="display-5">Juegos disponibles</h1>
            </Col>

            <Col xs={12} lg={4}>
              <Form>
                <Form.Group className="d-flex flex-column flex-sm-row gap-2" controlId="buscador">
                  <Form.Label className="my-auto">Buscador:</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese el nombre del juego que quiere buscar." />
                </Form.Group>
              </Form>
            </Col>

            <Col xs={12} lg={4} className="text-center text-lg-end">
              <Link className="btn btn-primary me-2" to="/administrador/crear">
                <i className="bi bi-file-earmark-plus"></i>
              </Link>
              <Button className="btn btn-info text-light" onClick={cargarJuegos}>
                <i className="bi bi-database-fill-add"></i>
              </Button>
            </Col>
          </Row>
        </div>
        <hr />
        <Table responsive>
          <thead>
            <tr>
              <th>Fila</th>
              <th>Nombre del Juego</th>
              <th className="text-center">Categoria </th>
              <th>Precio</th>
              <th>Plataforma</th>
              <th>URL</th>
              <th className="ps-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {juegos
              .filter((juego) => juego !== null && juego !== undefined)
              .map((juego, indice) => (
                <ItemJuegos key={juego.id} fila={indice + 1} juego={juego} borrarJuego={borrarJuego}></ItemJuegos>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Administrador;
