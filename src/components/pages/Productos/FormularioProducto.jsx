import { Row, Col, Form } from "react-bootstrap";

const FormularioProducto = () => {
  return (
    <section className="container my-3">
      <h1>Nuevo juego</h1>
      <Form className="py-3">
        <Form.Group className="mb-3" controlId="nombreJuego">
          <Form.Label>Nombre del juego*</Form.Label>
          <Form.Control type="text" placeholder="Call of Duty" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio$*</Form.Label>
          <Form.Control type="text" placeholder="$10.000" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="URL">
          <Form.Label>URL de la imagen*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://w.wallhaven.cc/full/1k/wallhaven-1k99z3.jpg"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una categoria*</option>
            <option value="Shooter">Shooter</option>
            <option value="SandBox">SandBox</option>
            <option value="Aventura">Aventura</option>
            <option value="Simulacion">Simulacion</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="plataforma">
          <Form.Label>Plataformas*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una plataforma</option>
            <option value="PC">PC</option>
            <option value="PlayStation 4/5">PlayStation 4/5</option>
            <option value="Xbox One/S">Xbox One/S</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </Form.Select>
        </Form.Group>
        <h3>Requisitos recomendados del sistema</h3>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>RAM*</Form.Label>
              <Form.Select>
                <option value="">Seleccionar RAM mínima</option>
                <option value="2gb">2 GB</option>
                <option value="4gb">4 GB</option>
                <option value="6gb">6 GB</option>
                <option value="8gb">8 GB</option>
                <option value="12gb">12 GB</option>
                <option value="16gb">16 GB</option>
                <option value="32gb">32 GB o más</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Sistema operativo*</Form.Label>
              <Form.Select>
                <option value="">Seleccionar sistema operativo</option>
                <option value="windows 10">Windows 10</option>
                <option value="windows 11">Windows 11</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>DirectX*</Form.Label>
              <Form.Select>
                <option value="">Seleccione una opción</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Procesador*</Form.Label>
              <Form.Control type="text" placeholder="Intel Core i3" />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Espacio*</Form.Label>
              <Form.Control type="text" placeholder="256 GB SSD o 1 TB HDD" />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Tarjeta de video*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: NVIDIA GTX 1060 / Radeon RX 580"
              />
            </Form.Group>
          </Col>
        </Row>
        <h3>Requisitos mínimos del sistema</h3>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>RAM*</Form.Label>
              <Form.Select>
                <option value="">Seleccionar RAM mínima</option>
                <option value="2gb">2 GB</option>
                <option value="4gb">4 GB</option>
                <option value="6gb">6 GB</option>
                <option value="8gb">8 GB</option>
                <option value="12gb">12 GB</option>
                <option value="16gb">16 GB</option>
                <option value="32gb">32 GB o más</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Sistema operativo*</Form.Label>
              <Form.Select>
                <option value="">Seleccionar sistema operativo</option>
                <option value="windows 10">Windows 10</option>
                <option value="windows 11">Windows 11</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>DirectX*</Form.Label>
              <Form.Select>
                <option value="">Seleccione una opción</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Procesador*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Intel Core i3-2100 (2 núcleos, 3.1 GHz) o AMD Ryzen 3 1200 (4 núcleos, 3.1 GHz)"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Espacio mínimo*</Form.Label>
              <Form.Control
                type="text"
                placeholder="20 GB HDD (disco duro mecánico)"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Tarjeta de video*</Form.Label>
              <Form.Control placeholder="Ej: NVIDIA GT 1030 / Intel HD 520" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default FormularioProducto;
