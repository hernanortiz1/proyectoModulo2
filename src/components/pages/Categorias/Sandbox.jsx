import Carousel from "react-bootstrap/Carousel";
import minecraft from "../../img/imgCarouselSandbox/minecraft.webp";
import garrysMod from "../../img/imgCarouselSandbox/garrysMod.jpg";
import terraria from "../../img/imgCarouselSandbox/terraria.jpg";
import { Row } from "react-bootstrap";
import CardJuegos from "../Juegos/CardJuegos";

const Sandbox = ({ juegos }) => {
  const juegosSandoBox = juegos.filter((juegos) => juegos.categoria === "SandBox");
  return (
    <>
      <section>
        <h1 className="text-center my-4 sombraTituloSandbox text-dark letras-espaciadas fw-bold orbitron">SANDBOX</h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg object-position-top" src={minecraft} alt="Minecraft" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h5 className="fs-5 fw-bold">Minecraft</h5>
              <p className="fs-6 mb-1">
                Construí, explorá y sobreviví en mundos infinitos. Desde aldeas hasta fortalezas, usá bloques para dar
                vida a tu imaginación.
              </p>
              <p className="fs-6">
                <del className="text-muted me-2">$19.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={garrysMod} alt="Garry's Mod" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Garry's Mod</h3>
              <p>
                Un sandbox sin reglas donde podés crear, experimentar y modificar todo con físicas de Half-Life 2. ¡El
                límite es tu imaginación!
              </p>
              <p>
                <del className="text-muted me-2">$5.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg object-position-top" src={terraria} alt="Terraria" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Terraria</h3>
              <p>
                Aventurate en un mundo 2D lleno de exploración, construcción, combate y secretos. ¡Tu imaginación es el
                límite!
              </p>
              <p>
                <del className="text-muted me-2">$9.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="my-5 container sombraSection rounded py-3">
        <Row>
          {juegosSandoBox.map((juego) => (
            <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Sandbox;
