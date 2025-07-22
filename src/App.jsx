import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/Productos/FormularioProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            {/* <Route path="/detalle" element={<DetalleProducto></DetalleProducto>}></Route> */}
            <Route
              path="/login"
              element={<Login /*falta funcion de Administrador*/></Login>}
            ></Route>

            {/* 
            rutas de categorias
           <Route path="/categoria/shooter" element={<Shooter></Shooter>}></Route>
            <Route path="/categoria/simulacion" element={<Simulacion></Simulacion>}></Route>
            <Route path="/categoria/aventura" element={<Aventura></Aventura>}></Route>
            <Route path="/categoria/sandbox" element={<Sandbox></Sandbox>}></Route>
            <Route path="/categoria/rpg" element={<Rpg></Rpg>}></Route>
            
            */}

            {/* 
             rutas de Administrador con protector Admin

                <Route path="/Administrador" element={<ProtectorAdmin Falta props ></ProtectorAdmin>}>
                  <Route index element={
                    <Administrador>
                      {falta props }
                    </Administrador>}>
                    </Route>
                      <Route path="/crear" element={<FormularioProducto> Falta props ></FormularioProducto>>
                      </Route>
                      <Route path="/editar/:id" element={<FormularioProducto> Falta props></FormularioProducto>}>

                    </Route>  
                </Route> 
            */}
           
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
