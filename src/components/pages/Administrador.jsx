import { Table, Container, Button } from "react-bootstrap";
import ItemJuegos from "./Juegos/ItemJuegos";
import { Link } from "react-router";

const Administrador = () => {
  return (
    <>
      <Container className="my-2">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Juegos disponibles</h1>
          <div>
            <Link className="btn btn-primary" to={"/crear"}>
              <i className="bi bi-file-earmark-plus"></i>
            </Link>
            <Button className="ms-2 btn btn-info text-light">
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
              <th>Categoria </th>
              <th>Precio</th>
              <th>Plataforma</th>
              <th>URL</th>
              <th className="ps-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemJuegos></ItemJuegos>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Administrador;
