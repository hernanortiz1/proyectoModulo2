
const DetalleProducto = () => {
    return (
        <>
        <div className="d-flex bg-dark justify-content-center mt-5">
            <div className='row container py-2'>
            <div className="col-12 col-md-12 col-lg-7 mx-lg-3 py-3">
      <img src="https://www.vice.com/wp-content/uploads/sites/2/2024/12/elden-ring-night-reign-feature-waypoint.jpg" alt="imagen juego" className='imgDetalle'/>
            </div>
            <div className='cardsDetalle col-12 col-md-12 col-lg-4 py-3 px-4 my-3'>
              <h1 className='text-light orbitron '>ELDEN RING</h1>
              <h3 className='text-light orbitron'>arg$5000</h3>
              <br />
              <h2 className="text-light bebasneue">categoria: "ROL,COMBATE"</h2>
              <h2 className="text-light bebasneue">desarrolladora: "FROM SOFTWARE"</h2>

            </div>
            </div>
        </div>
    </>
    );
};
export default DetalleProducto;