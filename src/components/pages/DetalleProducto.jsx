const DetalleProducto = () => {
  return (
    <>
      <div className="d-flex bg-dark justify-content-center mt-5">
        <div className="row container py-2 justify-content-center">
          <div className="col-12 col-md-12 col-lg-7 mx-lg-3 py-3">
            <img
              src="https://www.vice.com/wp-content/uploads/sites/2/2024/12/elden-ring-night-reign-feature-waypoint.jpg"
              alt="imagen juego"
              className="imgDetalle"
            />
          </div>
          <div className="cardsDetalle col-12 col-md-12 col-lg-4 py-3 px-4 my-3">
            <h1 className="text-light orbitron ">ELDEN RING</h1>
            <h3 className="text-light orbitron">arg$5000</h3>
            <br />
            <h2 className="text-light bebasneue">categoria: "ROL,COMBATE"</h2>
            <h2 className="text-light bebasneue">
              desarrolladora: "FROM SOFTWARE"
            </h2>
            <div>
              <h3 className="text-light orbitron">
                likes: 2 <i class="bi bi-hand-thumbs-up"></i>
              </h3>
              <h3 className="text-light orbitron">
                dislikes: 3 <i class="bi bi-hand-thumbs-down"></i>
              </h3>
            </div>
          </div>
          <article className="mt-3 mb-5 bordeDetalle py-3">
            <h1 className="orbitron">descripcion:</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minus voluptates quos? Velit veniam odit sint aliquam illum! Commodi obcaecati dicta, eum laudantium tempora necessitatibus? Recusandae commodi saepe iusto rerum.</h2>
          </article>
          <article className="cardsDetalle p-3 mb-5 row ">
            <h2 className="bebasneue">REQUISITOS DEL SISTEMA:</h2>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">RAM: 12gb</p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">TARJETA GRAFICA: rtx6090</p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">memoria de almacenamiento: 100gb</p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">SO: windows 11</p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">Direct X: VERSION 12</p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">PROCESADOR: intel core i5</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default DetalleProducto;
