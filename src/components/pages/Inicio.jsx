import Banner from "../../assets/Banner/Banner.avif"
import { Container} from "react-bootstrap";
import CardJuegos from "./Juegos/CardJuegos";
const Inicio = () => {
   
    return (
        <section className="mainSection">
            <img src={Banner} alt="banner gamer"
            className='banner'
            />
            <Container className="mt-5">
            <h1 className="display-4">Juegos destacados</h1>
            <hr />

                <CardJuegos></CardJuegos>
            </Container>
        </section>
    );
};

export default Inicio;
