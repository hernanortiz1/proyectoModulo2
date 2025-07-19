import { Link } from "react-router";

const Footer = () => {
  
    return (
    <footer classNameName="bg-dark py-3">
      <div classNameName="container">
        <Link to={"/"}>
          <h2 className="text-center text-lg-start text-light mb-4 orbitron">
            NovaStore
          </h2>
        </Link>
        <div className="row text-center text-lg-start">
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="text-light bebasneue mb-2">Productos</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="./pages/categoriaCelulares.html"
                  className="link-light link-underline-opacity-0"
                >
                  Celulares
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Tablets
                </a>
              </li>
              <li>
                <a
                  href="./pages/pagCategoriaNotebooks.html"
                  className="link-light link-underline-opacity-0"
                >
                  Notebooks
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Smart TVs
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Smartwatches
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="text-light bebasneue">Shop</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Experience Store
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Sucursales
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="text-light bebasneue">Soporte</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="./pages/contacto.html"
                  className="link-light link-underline-opacity-0"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Chat online
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Comunidad
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h4 className="text-light bebasneue">Quiénes Somos</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="./pages/acercaDeNosotros.html"
                  className="link-light link-underline-opacity-0"
                >
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="./pages/error404.html"
                  className="link-light link-underline-opacity-0"
                >
                  Trabaja con Nosotros
                </a>
              </li>
              <br />
              <li>
                <p className="text-light">¡Mantente informado!</p>
              </li>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <li>
                  <a
                    href="./pages/error404.html"
                    className="link-light link-underline-opacity-0"
                  >
                    <i className="text-light bi bi-facebook fs-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/error404.html"
                    className="link-light link-underline-opacity-0"
                  >
                    <i className="text-light bi bi-twitter-x fs-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/error404.html"
                    className="link-light link-underline-opacity-0"
                  >
                    <i className="text-light bi bi-instagram fs-3"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="./pages/error404.html"
                    className="link-light link-underline-opacity-0"
                  >
                    <i className="text-light bi bi-tiktok fs-3"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
