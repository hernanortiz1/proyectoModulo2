import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioJuego = ({ crearJuego }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (juego) => {
    if (crearJuego(juego)) {
      Swal.fire({
        title: "Juego creado!",
        text: `El juego ${juego.nombreJuego} fue creado correctamente.`,
        icon: "success",
      });
      reset();
    }
  };

  return (
    <section className="container my-3">
      <h1>Nuevo juego</h1>
      <Form className="py-3" onSubmit={handleSubmit(onSubmit)}>
        <Form.Text className="text-info">Los campos con un (*) son obligatorios.</Form.Text>
        <Form.Group className="mt-2" controlId="nombreJuego">
          <Form.Label>Nombre del juego*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Call of Duty"
            {...register("nombreJuego", {
              required: "El nombre del juego es obligatorio",
              minLength: {
                value: 4,
                message: "El nombre debe tener al menos 4 caracteres",
              },
              maxLength: {
                value: 50,
                message: "El nombre solo debe contener 50 caracteres",
              },
            })}
          />
        </Form.Group>
        <Form.Text className="text-danger">{errors.nombreJuego?.message}</Form.Text>

        <Form.Group className="mt-2" controlId="precio">
          <Form.Label>Precio $ *</Form.Label>
          <Form.Control
            type="number"
            placeholder="$10.000"
            {...register("precio", {
              required: "El precio es obligatorio",
              min: {
                value: 100,
                message: "El precion minimo debe ser $500",
              },
              max: {
                value: 100000,
                message: "El precio maximo es de $100000",
              },
            })}
          />
        </Form.Group>
        <Form.Text className="text-danger mb-3">{errors.precio?.message}</Form.Text>

        <Form.Group className="mt-2" controlId="URL">
          <Form.Label>URL de la imagen *</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://w.wallhaven.cc/full/1k/wallhaven-1k99z3.jpg"
            {...register("url", {
              required: "El link de la imagen es obligatorio",
              pattern: {
                value: /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/i,
                message: "La imagen debe ser una URL válida que termine en .jpg, .jpeg, .png o .webp",
              },
            })}
          />
        </Form.Group>
        <Form.Text className="text-danger mb-3">{errors.url?.message}</Form.Text>

        <Form.Group className="mt-2" controlId="categoria">
          <Form.Label>Categoria *</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Seleccione una categoria",
            })}
          >
            <option value="">Seleccione una categoria</option>
            <option value="Shooter">Shooter</option>
            <option value="SandBox">SandBox</option>
            <option value="Aventura">Aventura</option>
            <option value="Simulacion">Simulacion</option>
            <option value="RPG">RPG</option>
          </Form.Select>
        </Form.Group>
        <Form.Text className="text-danger mb-3">{errors.categoria?.message}</Form.Text>

        <Form.Group className="mt-2" controlId="plataforma">
          <Form.Label>Plataformas *</Form.Label>
          <Form.Select
            {...register("categoriaPlataforma", {
              required: "Seleccione una plataforma",
            })}
          >
            <option value="">Seleccione una plataforma</option>
            <option value="PC">PC</option>
            <option value="PlayStation 4/5">PlayStation 4/5</option>
            <option value="Xbox One/S">Xbox One/S</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
          </Form.Select>
        </Form.Group>
        <Form.Text className="text-danger mb-3">{errors.categoriaPlataforma?.message}</Form.Text>

        <Form.Group className="mt-2" controlId="destacados">
          <Form.Label>Destacados *</Form.Label>
          <Form.Select
            {...register("destacados", {
              required: "Indique si el juego es destacado",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Juego destacado">Juego destacado</option>
            <option value="Juego no destacado">Juego no destacado</option>
          </Form.Select>
        </Form.Group>
        <Form.Text className="text-danger">{errors.destacado?.message}</Form.Text>

        <h3 className="mt-2">Requisitos recomendados del sistema</h3>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="ram">
              <Form.Label>RAM*</Form.Label>
              <Form.Select
                {...register("ram", {
                  required: "La cantidad de RAM es obligatoria",
                })}
              >
                <option value="">Seleccionar RAM</option>
                <option value="2gb">2 GB</option>
                <option value="4gb">4 GB</option>
                <option value="6gb">6 GB</option>
                <option value="8gb">8 GB</option>
                <option value="12gb">12 GB</option>
                <option value="16gb">16 GB</option>
                <option value="32gb">32 GB o más</option>
              </Form.Select>
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.ram?.message}</Form.Text>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group controlId="so">
              <Form.Label>Sistema operativo*</Form.Label>
              <Form.Select
                {...register("so", {
                  required: "Seleccione un sistema operativo",
                })}
              >
                <option value="">Seleccionar sistema operativo</option>
                <option value="windows 10">Windows 10</option>
                <option value="windows 11">Windows 11</option>
              </Form.Select>
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.so?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="directx">
              <Form.Label>DirectX*</Form.Label>
              <Form.Select
                {...register("directx", {
                  required: "Selecciona una version de DirectX",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
              </Form.Select>
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.directx?.message}</Form.Text>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="procesador">
              <Form.Label>Procesador*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Intel Core i3"
                {...register("procesador", {
                  required: "El procesador es un dato obligatorio",
                  minLength: {
                    value: 4,
                    message: "Debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe tener solo 30 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.procesador?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="espacio">
              <Form.Label>Espacio*</Form.Label>
              <Form.Control
                type="text"
                placeholder="256 GB SSD o 1 TB HDD"
                {...register("espacio", {
                  required: "El espacio es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "Debe tener solo 15 caracteres",
                  },
                  pattern: {
                    value: /^[0-9]+ ?(GB|TB|gb|tb)$/,
                    message: "Debe indicar un número seguido de GB o TB",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.espacio?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="gpu">
              <Form.Label>Tarjeta de video*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: NVIDIA GTX 1060 / Radeon RX 580"
                {...register("gpu", {
                  required: "El GPU es obligatorio",
                  minLength: {
                    value: 4,
                    message: "Debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "Debe tener al menos 40 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.gpu?.message}</Form.Text>
          </Col>
        </Row>
        <h3>Requisitos mínimos del sistema</h3>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="ram2">
              <Form.Label>RAM*</Form.Label>
              <Form.Select
                {...register("ramMini", {
                  required: "La cantidad de RAM minima es obligatoria",
                })}
              >
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
            <Form.Text className="text-danger mb-3">{errors.ramMini?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="so2">
              <Form.Label>Sistema operativo*</Form.Label>
              <Form.Select
                {...register("soMini", {
                  required: "Seleccione un sistema operativo minimo",
                })}
              >
                <option value="">Seleccionar sistema operativo</option>
                <option value="windows 10">Windows 10</option>
                <option value="windows 11">Windows 11</option>
              </Form.Select>
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.soMini?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="directx2">
              <Form.Label>DirectX*</Form.Label>
              <Form.Select
                {...register("directxMini", {
                  required: "Selecciona una version de DirectX minima",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
              </Form.Select>
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.directxMini?.message}</Form.Text>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} md={4}>
            <Form.Group controlId="procesador2">
              <Form.Label>Procesador*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Intel Core i3-2100 (2 núcleos, 3.1 GHz) o AMD Ryzen 3 1200 (4 núcleos, 3.1 GHz)"
                {...register("procesadorMini", {
                  required: "El procesador minimo es un dato obligatorio",
                  minLength: {
                    value: 4,
                    message: "Debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe tener solo 30 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.procesadorMini?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="espacio minimo2">
              <Form.Label>Espacio mínimo*</Form.Label>
              <Form.Control
                type="text"
                placeholder="20 GB HDD (disco duro mecánico)"
                {...register("espacioMini", {
                  required: "El espacio minimo es un dato obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "Debe tener solo 15 caracteres",
                  },
                  pattern: {
                    value: /^[0-9]+ ?(GB|TB|gb|tb)$/,
                    message: "Debe indicar un número seguido de GB o TB",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.espacioMini?.message}</Form.Text>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Tarjeta de video*</Form.Label>
              <Form.Control
                placeholder="Ej: NVIDIA GT 1030 / Intel HD 520"
                {...register("gpuMini", {
                  required: "El GPU minimo es obligatorio",
                  minLength: {
                    value: 4,
                    message: "Debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 40,
                    message: "Debe tener al menos 40 caracteres",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger mb-3">{errors.gpuMini?.message}</Form.Text>
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioJuego;
