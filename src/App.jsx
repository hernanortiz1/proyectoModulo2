import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import Inicio from "./components/pages/Inicio";
import FormularioJuego from "./components/pages/Juegos/FormularioJuego";
import Administrador from "./components/pages/Administrador";
import Shooter from "./components/pages/Categorias/Shooter";
import Simulacion from "./components/pages/Categorias/Simulacion";
import Aventura from "./components/pages/Categorias/Aventura";
import Sandbox from "./components/pages/Categorias/Sandbox";
import Rpg from "./components/pages/Categorias/Rpg";
import { useEffect, useState } from "react";
import DetalleProducto from "./components/pages/detalleProducto";
import PreguntasFrecuentes from "./components/pages/PreguntasFrecuentes";

function App() {
  const usuarioLogueado = JSON.parse(sessionStorage.getItem("userKeyJuego")) || false;
  const juegosLocalstorage = JSON.parse(localStorage.getItem("listaJuegos")) || [];
  const [juegos, setJuegos] = useState(juegosLocalstorage);
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);

  useEffect(() => {
    localStorage.setItem("listaJuegos", JSON.stringify(juegos));
  }, [juegos]);

  return (
    <>
      <BrowserRouter>
        <Header usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/detalle" element={<DetalleProducto></DetalleProducto>}></Route>
            <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
            <Route path="/shooter" element={<Shooter></Shooter>}></Route>
            <Route path="/simulacion" element={<Simulacion></Simulacion>}></Route>
            <Route path="/aventura" element={<Aventura></Aventura>}></Route>
            <Route path="/sandbox" element={<Sandbox></Sandbox>}></Route>
            <Route path="/rpg" element={<Rpg></Rpg>}></Route>
            {/*<Route path="/sobre_nosotros" element={<Sobrenosotros></Sobrenosotros>}></Route>*/}
            <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes></PreguntasFrecuentes>}></Route>

            <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
              <Route index element={<Administrador juegos={juegos} setJuegos={setJuegos}></Administrador>}></Route>
              <Route path="crear" element={<FormularioJuego></FormularioJuego>}></Route>
              <Route path="editar/:id" element={<FormularioJuego></FormularioJuego>}></Route>
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
