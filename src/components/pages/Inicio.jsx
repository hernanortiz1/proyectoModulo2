import Banner from "../../assets/Banner/Banner.avif"
import { Container} from "react-bootstrap";
import CardProductos from "./Productos/CardProductos";
const Inicio = () => {
    return (
        <section className="mainSection">
            <img src={Banner} alt="banner gamer"
            className='banner'
            />
            <Container className="mt-5">
            <h1 className="display-4">Juegos destacados</h1>
            <hr />
            
                <CardProductos></CardProductos>
            </Container>
        </section>
    );
};

export default Inicio;
