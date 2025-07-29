import Carousel from "react-bootstrap/Carousel";
import zelda from "../../img/imgCarouselAventura/zelda.jpg";
import uncharted4 from "../../img/imgCarouselAventura/uncharted4.webp";
import redemption2 from "../../img/imgCarouselAventura/redemption2.jpg";
import { Row } from "react-bootstrap";
import CardJuegos from "../Juegos/CardJuegos";

const Aventura = ({ juegos }) => {
  const juegosAventura = juegos.filter((juego) => juego.categoria === "Aventura");
  return (
    <>
      <section>
        <h1 className="text-center my-4 sombraTituloAventura text-dark letras-espaciadas fw-bold orbitron">AVENTURA</h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={zelda} alt="The Legend of Zelda: Breath of the Wild" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h5 className="fs-5 fw-bold">The Legend of Zelda: Breath of the Wild</h5>
              <p className="fs-6 mb-1">
                Una épica aventura de mundo abierto donde explorás Hyrule con total libertad, resolvés santuarios y
                enfrentás a Ganon.
              </p>
              <p className="fs-6">
                <del className="text-muted me-2">$59.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={uncharted4} alt="Uncharted 4: A Thief’s End" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Uncharted 4: A Thief’s End</h3>
              <p>
                Únete a Nathan Drake en su última aventura cargada de acción, tesoros perdidos y paisajes
                impresionantes.
              </p>
              <p>
                <del className="text-muted me-2">$22.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 alturaImg" src={redemption2} alt="Red Dead Redemption 2" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
              <h3>Red Dead Redemption 2</h3>
              <p>
                Explorá el salvaje oeste en una épica historia de forajidos con mundo abierto, detalles impresionantes y
                narrativa cinematográfica.
              </p>
              <p>
                <del className="text-muted me-2">$29.999</del>
                <span className="badge bg-success me-2">-100%</span>
                <span className="fw-bold text-success sombraADMIN">FREE</span>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="my-5 container sombraSection rounded py-3">
        <Row>
          {juegosAventura.map((juego) => (
            <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Aventura;
