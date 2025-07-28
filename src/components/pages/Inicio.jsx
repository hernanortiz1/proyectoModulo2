import Banner from "../../assets/Banner/games.png";
import img1 from "../../assets/Banner/image1.jpeg";
import img2 from "../../assets/Banner/topjuegos.jpg";
import { Container, Row, Carousel } from "react-bootstrap";
import CardJuegos from "./Juegos/CardJuegos";
const Inicio = ({ juegos }) => {
<<<<<<< HEAD

=======
>>>>>>> 4fd22b6afccaf306399147f7f9ce77b182d8c2c3
  const categorias = ["Shooter", "RPG", "SandBox", "Aventura", "Simulacion"];
  return (
    <section className="mainSection">
      <Carousel>
        <Carousel.Item>
          <img className="banner" src={Banner} alt="banner" />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
            <h5 className="fs-5 fw-bold">¡Nueva Colección Verano 2025!</h5>
            <p className="fs-6 mb-1">Estilo, frescura y comodidad en un solo lugar.</p>
            <p className="fs-6">
              <del className="text-muted me-2">$25.000</del>
              <span className="badge bg-success me-2">20% OFF</span>
              <span className="fw-bold text-success sombraADMIN">$19.999</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="banner" src={img1} alt="" />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
            <h3>Encontra cualquier juego en nuestro sitio web</h3>
            <p>Con increibles descuentos.</p>
            <p>
              <del className="text-muted me-2">$10.000</del>
              <span className="badge bg-success me-2">100% OFF</span>
              <span className="fw-bold text-success sombraADMIN">FREE</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="banner" src={img2} alt="" />
          <Carousel.Caption className="bg-dark bg-opacity-50 p-2 rounded text-white text-center">
            <h3>Ofertas por Tiempo Limitado</h3>
            <p>Descuentos únicos en productos seleccionados.</p>
            <p>
              <del className="text-muted me-2">$45.000</del>
              <span className="badge bg-success me-2">30% OFF</span>
              <span className="fw-bold text-success sombraADMIN">$31.500</span>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <h1 className="display-4">Juegos destacados</h1>
        <hr />
        {categorias.map((categoria) => {
          const juegosCategoria = juegos
            .filter(
              (juego) =>
                juego.categoria.toLowerCase() === categoria.toLowerCase() && juego.destacados === "Juego destacado"
            )
            .slice(0, 4);

          if (juegosCategoria.length === 0) return null;
          return (
            <div key={categoria}>
              <h2 className="titulo-categoria">{categoria}</h2>
              <Row className="mb-3 d-flex justify-content-center">
                {juegosCategoria.map((juego) => (
                  <CardJuegos key={juego.id} juegos={juego}></CardJuegos>
                ))}
              </Row>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Inicio;
