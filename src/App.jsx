import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main></main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
