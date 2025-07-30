import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const Header = ({ usuarioAdmin, setUsuarioAdmin, setNombreUsuario, nombreUsuario }) => {
  const navegacion = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const logout = () => {
    Swal.fire({
      title: "¿Seguro que deseas cerrar sesión?",
      text: "Tu sesión se cerrará y volverás al inicio.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarioAdmin(null);
        setNombreUsuario("");
        localStorage.removeItem("userKeyJuego");
        localStorage.removeItem("userNombre");
        navegacion("/");
        setExpanded(false);
        Swal.fire("Sesión cerrada", "Has cerrado sesión correctamente.", "success");
      }
    });
  };

  return (
    <header className="sombraNavbarFooter">
      <Navbar expand="lg" className="bg-body-tertary" expanded={expanded}>
        <Container>
          <NavLink to="/" className="navbar-brand orbitron">
            GamerZone
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={"/"} onClick={() => setExpanded(false)}>
                Inicio
              </NavLink>
              <NavDropdown title="Categorias">
                <NavDropdown.Item as={NavLink} to="/shooter" onClick={() => setExpanded(false)}>
                  Shooter
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/simulacion" onClick={() => setExpanded(false)}>
                  Simulación
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/aventura" onClick={() => setExpanded(false)}>
                  Aventura
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sandbox" onClick={() => setExpanded(false)}>
                  Sandbox
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/rpg" onClick={() => setExpanded(false)}>
                  RPG
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Acerca de">
                <NavDropdown.Item as={NavLink} to={"/sobreNosotros"} onClick={() => setExpanded(false)}>
                  ¿Sobre nosotros?
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/preguntasFrecuentes"} onClick={() => setExpanded(false)}>
                  Preguntas Frecuentes
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              {usuarioAdmin === true ? (
                <>
                  <Nav className="align-items-center ms-auto">
                    <div className="nav-link disabled">
                      <span className="sombraADMIN">ADMIN</span>
                    </div>
                  </Nav>
                  <NavLink className="nav-link" to="/administrador" onClick={() => setExpanded(false)}>
                    Administración
                  </NavLink>
                  <Button className="nav-link" onClick={logout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : usuarioAdmin === false ? (
                <>
                  <Nav className="align-items-center ms-auto">
                    <div className="nav-link disabled">
                      <span className="sombraADMIN">Usuario: {nombreUsuario}</span>
                    </div>
                  </Nav>
                  <Button className="nav-link" onClick={logout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <NavLink className="nav-link" to="/login" onClick={() => setExpanded(false)}>
                    Iniciar sesión
                  </NavLink>
                  <NavLink className="nav-link" to="/registro" onClick={() => setExpanded(false)}>
                    Registro
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
