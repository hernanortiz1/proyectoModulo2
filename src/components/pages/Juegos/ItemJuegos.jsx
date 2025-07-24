import { Button } from "react-bootstrap";
import { Link } from "react-router";

const ItemJuegos = ({fila, juego}) => {
  return (

      <tr>
        <td className="text-center">{fila}</td>

        <td>{juego. nombreJuego}</td>

        <td className="text-center">{juego.categoria}</td>

        <td className="text-center">
         {juego.precio}
        </td>

        <td>{juego.plataforma}</td>
        <td>
            <img src="" alt={juego.nombreJuego} />
        </td>

        <td className="text-center">
          <Link className="me-lg-2 btn btn-warning">
            <i className="bi bi-pencil-square"></i>
          </Link>

          <Button variant="danger ">
            <i className="bi bi-trash"></i>
          </Button>
        </td>
      </tr>
  );
};

export default ItemJuegos;
