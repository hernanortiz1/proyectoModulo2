import { Table, Container, Button, Form } from "react-bootstrap";
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
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4">Juegos disponibles</h1>

          <Form>
            <Form.Group className="mb-3 d-flex gap-3" controlId="buscador">
              <Form.Label className="my-auto">Buscador: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del juego a buscar."
                onChange={handleChange}
                value={busqueda}
              />
            </Form.Group>
          </Form>

          <div>
            <Link className="btn btn-primary" to={"/administrador/crear"}>
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
            <Button className="ms-2 btn btn-info text-light" onClick={cargarJuegos}>
              <i className="bg bi bi-database-fill-add"></i>
            </Button>
          </div>
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
