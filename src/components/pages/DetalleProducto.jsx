import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

const DetalleProducto = ({buscarJuego}) => {
    const {id}=useParams()
    const [infojuego,setinfojuego]=useState({})

    useEffect(()=>{
     const juegoBuscado =buscarJuego(id)
     setinfojuego(juegoBuscado)
    },[])
  return (
    <>
      <div className="d-flex bg-dark justify-content-center mt-5">
        <div className="row container py-2 justify-content-center">
          <div className="col-12 col-md-12 col-lg-7 mx-lg-3 py-3">
            <img
              src={infojuego.imagen}
              alt={infojuego.nombreJuego}
              className="imgDetalle"
            />
          </div>
          <div className="cardsDetalle col-12 col-md-12 col-lg-4 py-3 px-4 my-3">
            <h1 className="text-light orbitron ">{infojuego.nombreJuego} </h1>
            <h3 className="text-light orbitron">arg${infojuego.precio} </h3>
            <br />
            <h2 className="text-light bebasneue">categoria:"{infojuego.categoria}" </h2>
            <h2 className="text-light bebasneue">
              desarrolladora: "{infojuego.desarrollador}"
            </h2>
            <div>
              <h3 className="text-light orbitron">
                likes: 2 <i className="bi bi-hand-thumbs-up"></i>
              </h3>
              <h3 className="text-light orbitron">
                dislikes: 3 <i className="bi bi-hand-thumbs-down"></i>
              </h3>
            </div>
            <div>
                <Link className="btn btn-success orbitron w-100 mt-2" to={"/comprar"}>agregar al carrito!</Link>
            </div>
          </div>
          <article className="mt-3 mb-5 bordeDetalle py-3">
            <h1 className="orbitron">descripcion:</h1>
            <h2>{infojuego.descripcion} </h2>
          </article>
          <article className="cardsDetalle p-3 mb-5  ">
            <div className="row">
            <h2 className="bebasneue">REQUISITOS RECOMENDADOS DEL SISTEMA:</h2>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">RAM: {infojuego.reqRecomendadoRam} </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">TARJETA GRAFICA: {infojuego.reqRecomendadoTarjetaVideo} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">memoria de almacenamiento: {infojuego.reqRecomendadoAlmacenamiento} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">SO: {infojuego.reqRecomendadoSistemaOperativo} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">Direct X: VERSION {infojuego.reqRecomendadoDirectX} </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">PROCESADOR: {infojuego.reqRecomendadoProcesador} </p>
            </div>
            </div>
            <div className="row">
                <h2 className="bebasneue">REQUISITOS MINIMOS DEL SISTEMA:</h2>
                <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">RAM: {infojuego.reqMinimoRam} </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">TARJETA GRAFICA: {infojuego.reqMinimoTarjetaVideo} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">memoria de almacenamiento: {infojuego.reqMinimoAlmacenamiento} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">SO: {infojuego.reqMinimoSistemaOperativo} </p>
            </div>
             <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">Direct X: VERSION {infojuego.reqMinimoDirectX} </p>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
               <p className="orbitron">PROCESADOR: {infojuego.reqMinimoProcesador} </p>
            </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default DetalleProducto;
