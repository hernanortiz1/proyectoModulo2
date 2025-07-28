import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import htmlologo from "../img/imgSobreNosotros/html.png";
import csslogo from "../img/imgSobreNosotros/css.png";
import javascriptlogo from "../img/imgSobreNosotros/javascript.png";
import reactlogo from "../img/imgSobreNosotros/react.png";
import bootstraplogo from "../img/imgSobreNosotros/bootstrap.png";
import avatar1 from "../img/imgSobreNosotros/avatar1.png";
import avatar2 from "../img/imgSobreNosotros/avatar2.png";
import avatar3 from "../img/imgSobreNosotros/avatar3.png";
import avatar4 from "../img/imgSobreNosotros/avatar4.png";
import avatar5 from "../img/imgSobreNosotros/avatar5.png";

const SobreNosotros = () => {
  return (
    <>
      <section>
        {/* Inicio presentacion */}
        <div className="container my-5">
          <div className="mb-3">
            <blockquote className="fst-italic text-center text-secondary">
              Somos el equipo detrás de <b>GamerZone</b>, un grupo de desarrolladores apasionados por los videojuegos,
              la tecnología y la innovación. Nos especializamos en crear un catálogo de juegos cuidadosamente
              estructurado, con categorías únicas y una experiencia de usuario fluida e intuitiva.
            </blockquote>
          </div>
          <div className="mb-3">
            <blockquote className="fst-italic text-center text-secondary">
              Esta plataforma fue desarrollada utilizando tecnologías modernas como <b>React</b> para el <b>frontend</b>
              , junto con <b>Bootstrap</b> y <b>CSS</b> para el diseño responsivo. Implementamos buenas prácticas de
              desarrollo como el enrutamiento con <b>React Router</b>.
            </blockquote>
          </div>
          <div className="mb-3">
            <blockquote className="fst-italic text-center text-secondary">
              Nuestra <b>misión</b> es ofrecer una experiencia de navegación rápida, visualmente atractiva y centrada en
              el usuario. Creemos en el poder del gaming para conectar personas, contar historias y transformar el
              entretenimiento digital.
            </blockquote>
          </div>
          <div>
            <blockquote className="fst-italic text-center text-secondary">
              Seguimos aprendiendo y creciendo como equipo, comprometidos con el desarrollo de soluciones innovadoras y
              funcionales dentro del mundo del software y los videojuegos.
            </blockquote>
          </div>
        </div>
        {/* Fin presentacion */}
        {/* Inicio galeria del equipo */}
        <div className="container my-5">
          <h2 className="bebasneue display-6 text-center mb-4">Conoce a nuestro equipo</h2>
          <div class="row justify-content-center row-gap-3">
            {/* Pimer miembro del equipo */}
            <article className="col-6 col-md-4 col-lg-2 equipoCard">
              <div class="card border-0 shadow h-100 teamCard">
                <img src={avatar1} alt="Avatar del primer miembro del equipo" />
                <div className="card-main bg-white text-dark h-100 py-2">
                  <h5 className="card-title bebasneue text-center fs-4 mt-3">Hernán Ortiz</h5>
                  <p className="text-center lead card-text">Especialista en React</p>
                  <p className="roboto mx-3 text-center">
                    4 años de experiencia desarrollando interfaces de usuario responsivas y accesibles.
                  </p>
                </div>
                <div className="card-footer text-center bg-primary">
                  <a
                    href="https://www.linkedin.com/in/hernán-ortiz/" target="_blank"
                    className="text-decoration-none btn btn-primary text-light"
                  >
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* Segundo miembro del equipo */}
            <article className="col-6 col-md-4 col-lg-2 equipoCard">
              <div className="card border-0 shadow h-100 teamCard">
                <img src={avatar2} alt="Avatar del segundo miembro del equipo" />
                <div className="card-main bg-white text-dark h-100 py-2">
                  <h5 className="card-title bebasneue text-center fs-4 mt-3">Marcos Joel Tebis</h5>
                  <p className="text-center lead card-text">Experto en CSS</p>
                  <p className="roboto mx-3 text-center">
                    Diseñador de sistemas de diseño y maquetación con enfoque mobile-first.
                  </p>
                </div>
                <div className="card-footer text-center bg-primary">
                  <a href="https://www.linkedin.com/" target="_blank" className="text-decoration-none btn btn-primary text-light">
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* Tercer miembro del equipo */}
            <article className="col-6 col-md-4 col-lg-2 equipoCard">
              <div className="card border-0 shadow h-100 teamCard">
                <img src={avatar3} alt="Avatar del tercer miembro del equipo" />
                <div className="card-main bg-white text-dark h-100 py-2">
                  <h5 className="card-title bebasneue text-center fs-4 mt-3">Jose Benjamin Quiros</h5>
                  <p className="text-center lead card-text">Backend y BOM</p>
                  <p className="roboto mx-3 text-center">
                    Especialista en operaciones CRUD, API's y manipulación de DOM/BOM.
                  </p>
                </div>
                <div className="card-footer text-center bg-primary">
                  <a href="https://www.linkedin.com/" target="_blank" className="text-decoration-none btn btn-primary text-light">
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* Cuarto miembro del equipo */}
            <article className="col-6 col-md-4 col-lg-2 equipoCard">
              <div className="card border-0 shadow h-100 teamCard">
                <img src={avatar4} alt="Avatar del cuarto miembro del equipo" />
                <div className="card-main bg-white text-dark h-100 py-2">
                  <h5 className="card-title bebasneue text-center fs-4 mt-3">Ignacio Joaquin Barrojo</h5>
                  <p className="text-center lead card-text">Game Curator</p>
                  <p className="roboto mx-3 text-center">
                    Especialista en seleccionar y evaluar los mejores juegos para nuestro catálogo.
                  </p>
                </div>
                <div className="card-footer text-center bg-primary">
                  <a href="https://www.linkedin.com/" target="_blank" className="text-decoration-none btn btn-primary text-light">
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                </div>
              </div>
            </article>
            {/* Quinto miembro del equipo */}
            <article className="col-6 col-md-4 col-lg-2 equipoCard">
              <div className="card border-0 shadow h-100 teamCard">
                <img src={avatar5} alt="Avatar del quinto miembro del equipo" />
                <div className="card-main bg-white text-dark h-100 py-2">
                  <h5 className="card-title bebasneue text-center fs-4 mt-3">Luis Martin Diaz</h5>
                  <p className="text-center lead card-text">Arquitecto Frontend</p>
                  <p className="roboto mx-3 text-center">
                    Lider técnico con experiencia en proyectos complejos de JavaScript.
                  </p>
                </div>
                <div className="card-footer text-center bg-primary">
                  <a href="https://www.linkedin.com/" target="_blank" className="text-decoration-none btn btn-primary text-light">
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* Fin galeria del equipo */}
        {/* Inicio Tecnologia que dominamos */}
        <div className="container my-5 tecnologiasQueDominamos">
          <h2 className="bebasneue text-center mb-4 titleTecnologia">Tecnologías que dominamos</h2>
          <div className="card border-0 p-4 techItem">
            <div className="row text-center justify-content-center align-items-center techItem">
              {/* HTML */}
              <div className="col-6 col-md-2 mb-0">
                <img src={htmlologo} alt="Logo de HTML" className="img-fluid mb-2" />
                <i></i>
                <p>HTML5</p>
              </div>

              {/*CSS3 */}
              <div className="col-6 col-md-2 mb-0">
                <img src={csslogo} alt="Logo de CSS" className="img-fluid mb-2" />
                <p>CSS3</p>
              </div>

              {/* JavaScript */}
              <div className="col-6 col-md-2 mb-0">
                <img src={javascriptlogo} alt="Logo de JavaScript" className="img-fluid mb-2" />
                <p>JavaScript</p>
              </div>

              {/* React */}
              <div className="col-6 col-md-2 mb-0">
                <img src={reactlogo} alt="Logo de React" className="img-fluid mb-2" />
                <p className="font-medium">React</p>
              </div>

              {/* Bootstrap */}
              <div className="col-6 col-md-2 mb-0">
                <img src={bootstraplogo} alt="Logo de Bootstrap" className="img-fluid mb-2" />
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Tecnologia que dominamos */}
      </section>
    </>
  );
};

export default SobreNosotros;
