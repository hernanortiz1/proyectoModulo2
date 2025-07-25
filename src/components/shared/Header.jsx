import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="sombraNavbarFooter">
      <Navbar expand="lg" className="bg-body-tertary">
        <Container>
          <NavLink to="/" className="navbar-brand orbitron">
            GamerZone
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/shooter">
                  Shooter
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/simulacion">
                  Simulación
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/aventura">
                  Aventura
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/sandbox">
                  Sandbox
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/rpg">
                  RPG
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">¿Sobre nosotros?</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav className="align-items-center">
                <div className="nav-link disabled">
                  <span className="sombraADMIN">ADMIN</span> (<small className="text-success">activo</small>)
                </div>
              </Nav>
              <Nav.Link href="#link">Administración</Nav.Link>
              <Nav.Link href="#link">Iniciar sesión</Nav.Link>
              <Nav.Link href="#link">Cerrar sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
