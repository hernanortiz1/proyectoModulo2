import { Link } from "react-router";
import Accordion from 'react-bootstrap/Accordion';

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
                <h3 className="my-2">🎮 Preguntas sobre los juegos</h3>
                 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Qué requisitos necesita mi PC o consola para jugar?</Accordion.Header>
        <Accordion.Body>
          Los requisitos de la pc para jugar los juegos se pueden encontrar dandole a ver mas en cada juego del inicio o en las categorias,
          una vez dado el click solo basta con bajar un poco para encontrarlos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Hay juegos gratuitos disponibles en la web?</Accordion.Header>
        <Accordion.Body>
          SI! hay juegos gratuitoss en nuestra web, eso si, su disponibilidad no esta garantizada, si no encuentras ninguna probablemente sea porque aun no han sido publicados
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
        <Accordion.Header>¿Puedo jugar sin conexión a internet?</Accordion.Header>
        <Accordion.Body>
         esto depende mucho del juego que quieras jugar, claro que un juego multijugador online necesitaria conexion a internet pero aquellos que  son singleplayer o multijugador local andan sin problema
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    <h3 className="my-2">👤 Preguntas sobre la cuenta</h3>
                 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Cómo entro a una cuenta en el sitio?</Accordion.Header>
        <Accordion.Body>
          para iniciar sesion basta con darle a el boton de login ingresar tus datos y enviarlos!de esta manera entrarias a tu cuenta, siempre y cuando los datos sean correctos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Puedo vincular mi cuenta con Steam, Xbox o PlayStation?</Accordion.Header>
        <Accordion.Body>
     no, actualmente no contamos con servicios de conexion con plataformas de gaming 
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
        <Accordion.Header>¿Es obligatorio verificar mi correo electrónico?

</Accordion.Header>
        <Accordion.Body>
        es obligatorio ingresar un email valido para poder ingresar a tu cuenta
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
    <h3 className="my-2">🛠 Soporte técnico</h3>
                 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Cómo reporto un error o bug?</Accordion.Header>
        <Accordion.Body>
          para reportar un error o bug de un juego debes contactarte con el servicio al cliente del juego que sea el error, en caso de ser un bug en la web puedes escribir nuestro hashtag #GAMERZONEQUESTION de esta forma veremos tu error y veremos como solucionarlo
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Dónde puedo contactar al soporte?</Accordion.Header>
        <Accordion.Body>
          normalmente el soporte de los juegos los puedes encontrar en la informacion de la empresa desarrolladora, si tienes problemas contactados por nuestras redes sociales
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
        <Accordion.Header>¿Qué tipo de juegos ofrecen?</Accordion.Header>
        <Accordion.Body>
        ofrecemos juegos de todo tipo. varian de todo tipo AAA, AA, A indies, etc. puedes ver todos nuestros juegoss entrando en la seccion de categorias y eligiendo una seccion que te guste
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
             </div>

            <div className="cardsDetalle  fs-4 p-2 col-12 col-md-6 col-lg-4">
<p>¿Quieres hacernos una pregunta puntual? haz una pregunta mediante nuestro Hashtag "#GAMERZONEQUESTION", leeremos todo lo que coloquen! o contactanos mediante nuestras redes sociales</p>
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