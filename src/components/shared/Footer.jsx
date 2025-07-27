import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="py-3 sombraNavbarFooter">
      <div className="container">
        <Link to={"/"} className="text-decoration-none">
          <h2 className="text-center text-lg-start text-light mb-4 orbitron">GamerZone</h2>
        </Link>
        <div className="row text-center text-lg-start">
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="mb-2 bebasneue">Juegos</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Minecraft
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Terraria
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Sims 4
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Cities
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  The Legend of Zelda
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="bebasneue">Categorias</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={"/sandbox"} className="link-light link-underline-opacity-0">
                  Sandbox
                </Link>
              </li>
              <li>
                <Link to={"/simulacion"} className="link-light link-underline-opacity-0">
                  Simulación
                </Link>
              </li>
              <li>
                <Link to={"/shooter"} className="link-light link-underline-opacity-0">
                  Shooter
                </Link>
              </li>
              <li>
                <Link to={"/rpg"} className="link-light link-underline-opacity-0">
                  RPG
                </Link>
              </li>
              <li>
                <Link to={"/aventura"} className="link-light link-underline-opacity-0">
                  Aventura
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="bebasneue">Soporte</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Chat online
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="bebasneue">Quiénes Somos</h4>
            <ul className="list-unstyled">
              <li>
                <Link to={"/sobreNosotros"} className="link-light link-underline-opacity-0">
                  ¿Sobre nosotros?
                </Link>
              </li>
              <li>
                <Link to={"/preguntasFrecuentes"} className="link-light link-underline-opacity-0">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  Trabaja con Nosotros
                </Link>
              </li>

              <li className="mt-5">
                <p className="text-light">¡Mantente informado!</p>
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start gap-3">
                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  <i className="text-light bi bi-facebook fs-3"></i>
                </Link>

                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  <i className="text-light bi bi-twitter-x fs-3"></i>
                </Link>

                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  <i className="text-light bi bi-instagram fs-3"></i>
                </Link>

                <Link to={"/error404"} className="link-light link-underline-opacity-0">
                  <i className="text-light bi bi-tiktok fs-3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
