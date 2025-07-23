import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header";
import Error404 from "./components/pages/Error404";
import ProtectorAdmin from "./components/routes/ProtectorAdmin"
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/Juegos/FormularioJuego";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            {/* falta ruta de inicio, protector de rutas y ruta a Administrador */}
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/crear" element={<FormularioProducto></FormularioProducto>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
