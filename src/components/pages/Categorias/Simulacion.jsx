import Carousel from "react-bootstrap/Carousel";
import citiesSkyLines from "../../img/imgCarouselSimulacion/citiesSkyLines.jpg";
import farmingSimulator22 from "../../img/imgCarouselSimulacion/farmingSimulator22.jpg";
import planetZoo from "../../img/imgCarouselSimulacion/planetZoo.jpg";
import CardJuegos from "../Juegos/CardJuegos";
import { Row } from "react-bootstrap";

const Simulacion = ({ juegos }) => {
  const juegosSimulacion = juegos.filter((juego) => juego.categoria === "Simulacion");
  return (
    <>
      <section>
        <h1 className="text-center my-4 sombraTituloSimulacion text-dark letras-espaciadas fw-bold orbitron">
          SIMULACIÓN
        </h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={citiesSkyLines} alt="Cities: Skylines" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h5 className="fs-5 fw-bold">Cities: Skylines</h5>
              <p className="fs-6 mb-1">
                Un completo simulador de ciudades con gestión urbanística, transporte y servicios públicos.
              </p>
              <p className="fs-6">
                <del className="text-muted me-2">$15.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 alturaImg object-position-top"
              src={farmingSimulator22}
              alt="Farming Simulator 22"
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Farming Simulator 22</h3>
              <p>Conviértete en un agricultor moderno con maquinaria realista y cultivos detallados.</p>
              <p>
                <del className="text-muted me-2">$12.499</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={planetZoo} alt="Planet Zoo" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Planet Zoo</h3>
              <p>Crea y gestiona un zoológico vivo con animales realistas y un ecosistema dinámico.</p>
              <p>
                <del className="text-muted me-2">$19.499</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="my-5 container sombraSection rounded py-3">
        <Row>
          {juegosSimulacion.map((juego) => (
            <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Simulacion;
