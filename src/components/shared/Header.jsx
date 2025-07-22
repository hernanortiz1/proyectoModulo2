import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header className="sombraNavbarFooter">
      <Navbar expand="lg" className="bg-body-tertary">
        <Container>
          <Navbar.Brand href="#home" className="orbitron">
            GamerZone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Shooter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Simulación
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sandbox</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">RPG</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">¿Sobre nosotros?</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav className="align-items-center">
                <div className="nav-link disabled">
                  <span className="sombraADMIN">ADMIN</span> (
                  <small className="text-success">activo</small>)
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
