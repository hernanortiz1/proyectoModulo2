import { Card } from "react-bootstrap";
import { NavLink } from "react-router";
import cs2 from "../../../img/imgCarouselShooter/cs2.jpg";

const Cards = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={cs2} alt="Counter-Striker: 2" className="img-fluid" />
        <Card.Body>
          <Card.Title>Counter-Striker: 2</Card.Title>
          <Card.Text>El clásico FPS táctico vuelve con mejoras visuales y gameplay refinado.</Card.Text>
          <Card.Text>
            <del className="text-muted me-2">$24.999</del>
            <span className="badge bg-success me-2">-100%</span>
            <span className="fw-bold text-success sombraADMIN">FREE</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <NavLink className="btn btn-success" to="/detalle">
            Ver más
          </NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
