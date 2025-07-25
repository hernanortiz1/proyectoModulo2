const SobreNosotros = () => {
  return (
    <>
      {/* Galeria del equipo */}
      <section className="container my-5">
        <h2 className="bebasneue display-6 text-center">Conoce a nuestro equipo</h2>
        {/* Inicio galeria del equipo */}
        <div class="row justify-content-center row-gap-3">
          {/* Pimer miembro del equipo */}
          <article className="col-12 col-md-6 col-lg-3 equipoCard">
            <div class="card shadow h-100">
              {/* <img src="#Link" className="card-img-top equipoFoto col-6" alt=""> */}
              <div className="card-main bg-white text-dark h-100 my-2">
                <h5 className="card-title bebasneue text-center fs-4">Hernan Ortiz</h5>
                <p className="text-center lead card-text">Especialista en React</p>
                <p className="roboto mx-3 text-center">
                  4 años de experiencia desarrollando interfaces de usuario responsivas y accesibles.
                </p>
              </div>
              <div className="card-footer text-center bg-primary">
                <a href="" className="text-decoration-none btn btn-primary text-light">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </article>
          {/* Segundo miembro del equipo */}
          <article className="col-12 col-md-6 col-lg-3 equipoCard">
            <div class="card shadow h-100">
              {/* <img src="#Link" className="card-img-top equipoFoto col-6" alt=""> */}
              <div className="card-main bg-white text-dark h-100 my-2">
                <h5 className="card-title bebasneue text-center fs-4">Marcos Joel Tebis</h5>
                <p className="text-center lead card-text">Experto en CSS</p>
                <p className="roboto mx-3 text-center">
                  Diseñador de sistemas de diseño y maquetación con enfoque mobile-first.
                </p>
              </div>
              <div className="card-footer text-center bg-primary">
                <a href="" className="text-decoration-none btn btn-primary text-light">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </article>
          {/* Tercer miembro del equipo */}
          <article className="col-12 col-md-6 col-lg-3 equipoCard">
            <div class="card shadow h-100">
              {/* <img src="#Link" className="card-img-top equipoFoto col-6" alt=""> */}
              <div className="card-main bg-white text-dark h-100 my-2">
                <h5 className="card-title bebasneue text-center fs-4">Jose Benjamin Quiros</h5>
                <p className="text-center lead card-text">Backend y BOM</p>
                <p className="roboto mx-3 text-center">
                  Especialista en operaciones CRUD, API's y manipulación de DOM/BOM.
                </p>
              </div>
              <div className="card-footer text-center bg-primary">
                <a href="" className="text-decoration-none btn btn-primary text-light">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </article>
          {/* Cuarto miembro del equipo */}
          <article className="col-12 col-md-6 col-lg-3 equipoCard">
            <div class="card shadow h-100">
              {/* <img src="#Link" className="card-img-top equipoFoto col-6" alt=""> */}
              <div className="card-main bg-white text-dark h-100 my-2">
                <h5 className="card-title bebasneue text-center fs-4">Ignacio Joaquin Barrojo</h5>
                <p className="text-center lead card-text">Game Curator</p>
                <p className="roboto mx-3 text-center">
                  Especialista en seleccionar y evaluar los mejores juegos para nuestro catálogo.
                </p>
              </div>
              <div className="card-footer text-center bg-primary">
                <a href="" className="text-decoration-none btn btn-primary text-light">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </article>
          {/* Quinto miembro del equipo */}
          <article className="col-12 col-md-6 col-lg-3 equipoCard">
            <div class="card shadow h-100">
              {/* <img src="#Link" className="card-img-top equipoFoto col-6" alt=""> */}
              <div className="card-main bg-white text-dark h-100 my-2">
                <h5 className="card-title bebasneue text-center fs-4">Luis Martin Diaz</h5>
                <p className="text-center lead card-text">Arquitecto Fronend</p>
                <p className="roboto mx-3 text-center">
                  Lider técnico con experiencia en proyectos complejos de JavaScript.
                </p>
              </div>
              <div className="card-footer text-center bg-primary">
                <a href="" className="text-decoration-none btn btn-primary text-light">
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
        {/* Fin galeria del equipo */}
        {/* Inicio Tecnologia que dominamos */}
        <div className="container my-5">
          <div className="card shadow rounded p-4">
            <h2 className="text-center mb-4">Tecnologías que dominamos</h2>
            <div className="row text-center justify-content-center align-items-center">
              {/* HTML */}
              <div className="col-6 col-md-2 mb-4">
                <img src="" alt="" className="img-fluid mb-2" />
                <p>HTML5</p>
              </div>

              {/*CSS3 */}
              <div className="col-6 col-md-2 mb-4">
                <img src="" alt="" className="img-fluid mb-2" />
                <p>CSS3</p>
              </div>

              {/* JavaScript */}
              <div className="col-6 col-md-2 mb-4">
                <img src="" alt="" className="img-fluid mb-2" />
                <p>JavaScript</p>
              </div>

              {/* React */}
              <div className="col-6 col-md-2 mb-4">
                <img src="" alt="" className="img-fluid mb-2" />
                <p>React</p>
              </div>

              {/* Bootstrap */}
              <div className="col-6 col-md-2 mb-4">
                <img src="" alt="" className="img-fluid mb-2" />
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
