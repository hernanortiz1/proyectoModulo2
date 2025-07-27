import Banner from "../../assets/Banner/Banner.avif";
import { Container, Row } from "react-bootstrap";
import CardJuegos from "./Juegos/CardJuegos";
const Inicio = ({ juegos }) => {

  const categorias = ["Shooter", "RPG", "SandBox", "Aventura", "Simulacion"];
  return (
    <section className="mainSection">
      <img src={Banner} alt="banner gamer" className="banner" />
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
              <h2>{categoria}</h2>
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
