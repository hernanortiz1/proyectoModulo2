import { Link } from "react-router";
import Accordion from "react-bootstrap/Accordion";

const PreguntasFrecuentes = () => {
  return (
    <div className="d-flex  bg-dark pb-5 mt-5 container ">
      <div className="row justify-content-center">
        <img
          src="https://www.vice.com/wp-content/uploads/sites/2/2024/12/elden-ring-night-reign-feature-waypoint.jpg"
          alt="imagen juego"
          className="imgDetalle"
        />
        <h1 className="text-center my-4 orbitron">PREGUNTAS FRECUENTES!</h1>

        <div className="col-12 col-md-6 col-lg-8">
          <h3 className="my-2 text-center text-lg-start">🎮 Preguntas sobre los juegos</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Qué requisitos necesita mi PC o consola para jugar?</Accordion.Header>
              <Accordion.Body>
                Los requisitos de la PC para jugar los juegos se pueden encontrar dando clic en "Ver más" en cada juego
                del inicio o en las categorías. Una vez hecho clic, solo basta con bajar un poco para encontrarlos.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Hay juegos gratuitos disponibles en la web?</Accordion.Header>
              <Accordion.Body>
                ¡Sí! Hay juegos gratuitos en nuestra web. Eso sí, su disponibilidad no está garantizada; si no
                encuentras ninguno probablemente sea porque aún no han sido publicados.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Puedo jugar sin conexión a internet?</Accordion.Header>
              <Accordion.Body>
                Esto depende mucho del juego que quieras jugar. Claro que un juego multijugador online necesita conexión
                a internet, pero aquellos que son singleplayer o multijugador local funcionan sin problema.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h3 className="my-2 text-center text-lg-start mt-4">👤 Preguntas sobre la cuenta</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo entro a una cuenta en el sitio?</Accordion.Header>
              <Accordion.Body>
                Para iniciar sesión basta con darle al botón de login, ingresar tus datos y enviarlos. ¡De esta manera
                entrarás a tu cuenta, siempre y cuando los datos sean correctos!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Puedo vincular mi cuenta con Steam, Xbox o PlayStation?</Accordion.Header>
              <Accordion.Body>
                No, actualmente no contamos con servicios de conexión con plataformas de gaming.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Es obligatorio verificar mi correo electrónico?</Accordion.Header>
              <Accordion.Body>Es obligatorio ingresar un email válido para poder acceder a tu cuenta.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h3 className="my-2 text-center text-lg-start mt-4">🛠 Soporte técnico</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Cómo reporto un error o bug?</Accordion.Header>
              <Accordion.Body>
                Para reportar un error o bug de un juego debes contactarte con el servicio al cliente del juego
                correspondiente. En caso de ser un bug en la web, puedes usar nuestro hashtag{" "}
                <strong>#GAMERZONEQUESTION</strong>. De esta forma veremos tu error y buscaremos cómo solucionarlo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Dónde puedo contactar al soporte?</Accordion.Header>
              <Accordion.Body>
                Normalmente el soporte de los juegos se encuentra en la información de la empresa desarrolladora. Si
                tienes problemas, contáctanos por nuestras redes sociales.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Qué tipo de juegos ofrecen?</Accordion.Header>
              <Accordion.Body>
                Ofrecemos juegos de todo tipo: AAA, AA, A, indies, etc. Puedes ver todos nuestros juegos entrando en la
                sección de categorías y eligiendo una que te guste.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="cardsDetalle fs-4 p-2 col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
          <p className="p-1">
            ¿Quieres hacernos una pregunta puntual? Hazlo mediante nuestro hashtag <strong>"#GAMERZONEQUESTION"</strong>
            . ¡Leeremos todo lo que escribas! O contáctanos mediante nuestras redes sociales.
          </p>
          <Link to={"#"} className="link-light link-underline-opacity-0 mx-2">
            <i className="text-light bi bi-facebook fs-3"></i>
          </Link>

          <Link to={"#"} className="link-light link-underline-opacity-0 mx-2">
            <i className="text-light bi bi-twitter-x fs-3"></i>
          </Link>

          <Link to={"#"} className="link-light link-underline-opacity-0 mx-2">
            <i className="text-light bi bi-instagram fs-3"></i>
          </Link>

          <Link to={"#"} className="link-light link-underline-opacity-0 mx-2">
            <i className="text-light bi bi-tiktok fs-3"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
