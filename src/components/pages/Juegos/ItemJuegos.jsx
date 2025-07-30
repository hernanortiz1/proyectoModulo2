import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemJuegos = ({ fila, juego, borrarJuego }) => {
  const eliminarJuego = () => {
    Swal.fire({
      title: "Eliminar juego",
      text: "no puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#146c43",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarJuego(juego.id)) {
          Swal.fire({
            title: "Juego eliminado",
            text: `el juego ${juego.nombreJuego} fue eliminado`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "ocurrio un error",
            text: `el juego ${juego.nombreJuego} NO fue eliminado`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>

      <td>{juego.nombreJuego}</td>

      <td className="text-center">{juego.categoria}</td>

      <td className="text-center">${juego.precio}</td>
      <td>{juego.plataforma}</td>
      <td>
        <img src={juego.imagen} alt={juego.nombreJuego} className="img-admin" />
      </td>
      <td className="text-center">
        <Link className="btn btn-warning mb-2 mb-lg-0 me-0 me-lg-2" to={"/administrador/editar/" + juego.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarJuego}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemJuegos;
