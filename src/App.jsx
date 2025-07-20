import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            {/* falta ruta de inicio, protector de rutas y ruta a Administrador */}
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
