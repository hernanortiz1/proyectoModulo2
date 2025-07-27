import { Table, Container, Button, Form, Row, Col } from "react-bootstrap";
import ItemJuegos from "./Juegos/ItemJuegos";
import { Link } from "react-router";
import { juegosPrueba } from "../../data/juegosPrueba";
const Administrador = ({ setJuegos, borrarJuego, busqueda, handleChange, juegosFiltados }) => {
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
                <Form.Group className="d-flex flex-column flex-sm-row gap-2 align-items-sm-center" controlId="buscador">
                  <Form.Label className="my-auto">Buscador:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del juego a buscar."
                    onChange={handleChange}
                    value={busqueda}
                  />
                </Form.Group>
              </Form>
            </Col>

            <Col xs={12} lg={4} className="text-lg-end">
              <div className="d-flex flex-column flex-md-row gap-2 justify-content-center justify-content-lg-end">
                <Link className="btn btn-primary" to="/administrador/crear">
                  <i className="bi bi-file-earmark-plus"></i>
                </Link>
                <Button className="btn btn-info text-light" onClick={cargarJuegos}>
                  <i className="bi bi-database-fill-add"></i>
                </Button>
              </div>
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
            {juegosFiltados.length > 0 ? (
              juegosFiltados
                .filter((juego) => juego !== null && juego !== undefined)
                .map((juego, indice) => (
                  <ItemJuegos key={juego.id} fila={indice + 1} juego={juego} borrarJuego={borrarJuego}></ItemJuegos>
                ))
            ) : (
              <tr>
                <td colSpan="100%" className="text-center text-muted fst-italic">
                  No se encontraron juegos con su búsqueda
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Administrador;
