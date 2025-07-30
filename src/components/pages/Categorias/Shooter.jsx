import Carousel from "react-bootstrap/Carousel";
import cs2 from "../../img/imgCarouselShooter/cs2.jpg";
import battlefield1 from "../../img/imgCarouselShooter/battlefield1.webp";
import blackOps2 from "../../img/imgCarouselShooter/blackOps2.jpg";
import CardJuegos from "../Juegos/CardJuegos";
import { Row } from "react-bootstrap";

const Shooter = ({ juegos }) => {
  const juegosShooter = juegos.filter((juego) => juego.categoria === "Shooter");
  return (
    <>
      <section>
        <h1 className="text-center my-4 sombraTituloShooter text-dark letras-espaciadas fw-bold orbitron">SHOOTERS</h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={cs2} alt="Counter-Strike 2" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h5 className="fs-5 fw-bold">Counter-Strike: 2</h5>
              <p className="fs-6 mb-1">El clásico FPS táctico vuelve con mejoras visuales y gameplay refinado.</p>
              <p className="fs-6">
                <del className="text-muted me-2">$18.811</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={battlefield1} alt="Battlefield 1: Apocalypse" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Battlefield 1: Apocalypse</h3>
              <p>Expansión intensa con nuevos mapas, armas y caos en la Primera Guerra Mundial.</p>
              <p>
                <del className="text-muted me-2">$9.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={blackOps2} alt="Call of Duty: Black Ops 6 Warzone" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Call of Duty: Black Ops 6 Warzone</h3>
              <p>La última entrega de la saga Black Ops con acción trepidante y nuevos modos de juego.</p>
              <p>
                <del className="text-muted me-2">$24.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="my-5 container sombraSection rounded py-3">
        <Row>
          {juegosShooter.map((juego) => (
            <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Shooter;
