import Carousel from "react-bootstrap/Carousel";
import witcher from "../../img/imgCarouselRpg/witcher.webp";
import eldenRIng from "../../img/imgCarouselRpg/eldenRIng.jpg";
import divinity2 from "../../img/imgCarouselRpg/divinity2.jpg";
import { Row } from "react-bootstrap";
import CardJuegos from "../Juegos/CardJuegos";

const Rpg = ({ juegos }) => {
  const juegosRPG = juegos.filter((juego) => juego.categoria === "RPG");
  return (
    <>
      <section>
        <h1 className="text-center my-4 sombraTituloRpg text-dark letras-espaciadas fw-bold orbitron">RPG</h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg object-position-top" src={witcher} alt="The Witcher 3: Wild Hunt" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h5 className="fs-5 fw-bold">The Witcher 3: Wild Hunt</h5>
              <p className="fs-6 mb-1">
                Embárcate en una épica aventura como Geralt de Rivia, cazador de monstruos, en un mundo abierto lleno de
                decisiones y consecuencias.
              </p>
              <p className="fs-6">
                <del className="text-muted me-2">$27.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 alturaImg object-position-top"
              src={eldenRIng}
              alt="Elden Ring: Tarnished Edition"
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Elden Ring: Tarnished Edition</h3>
              <p>
                Explorá las Tierras Intermedias en esta obra maestra de acción y rol. Enfrentá jefes colosales y
                descubrí secretos en un mundo abierto creado por FromSoftware.
              </p>
              <p>
                <del className="text-muted me-2">$34.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={divinity2} alt="Divinity: Original Sin 2" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Divinity: Original Sin 2</h3>
              <p>
                Una experiencia RPG profunda con combate táctico por turnos, narrativa ramificada y modo cooperativo.
                Elegí tu origen y forjá tu destino en Rivellon.
              </p>
              <p>
                <del className="text-muted me-2">$27.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="my-5 container sombraSection rounded py-3">
        <Row>
          {juegosRPG.map((juego) => (
            <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Rpg;
