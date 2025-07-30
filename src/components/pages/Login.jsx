import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = ({ setUsuarioAdmin, setNombreUsuario, cuentas }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorLogin, setErrorLogin] = useState(""); //
  const navegacion = useNavigate();

  const iniciarSesion = (usuario) => {
    if (usuario.email === import.meta.env.VITE_API_EMAIL && usuario.password === import.meta.env.VITE_API_PASSWORD) {
      setUsuarioAdmin(true);
      localStorage.setItem("userKeyJuego", true);
      navegacion("/administrador");
      return;
    } else {
      setErrorLogin("Email o contraseña incorrectos.");
    }

    const usuarioEncontrado = cuentas.find(
      (cuenta) => cuenta.email === usuario.email && cuenta.password === usuario.password
    );

    if (usuarioEncontrado) {
      setUsuarioAdmin(false);
      setNombreUsuario(usuarioEncontrado.nombre);
      localStorage.setItem("userKeyJuego", false);
      localStorage.setItem("userNombre", usuarioEncontrado.nombre);
      navegacion("/");
    } else {
      setErrorLogin("Email o contraseña incorrectos.");
    }
  };

  return (
    <section className="fondoLogin">
      <section className="container shadow-lg ">
        <Row className="align-items-center fondoContenedorIzquierdoLogin rounded-3">
          <Col md={8} sm={12} className="text-center text-white rounded-3 fondoContenedorDerechoLogin">
            <div className="shadow-lg rounded-3 text-center py-md-5">
              <h2 className="fs-1">
                Bienvenido a <br />
                <span className="orbitron">GamerZone</span>
              </h2>
              <p className="fs-4 mt-4 mx-5">
                Gestiona fácilmente los productos de GamerZone desde un solo lugar y mantén la tienda al día.
              </p>
            </div>
          </Col>

          <Col md={4} sm={12} className="fondoContenedorIzquierdoLogin rounded-3 h-100 ">
            <Form
              onSubmit={handleSubmit(iniciarSesion)}
              className="border border-1 border-primary rounded-4 shadow p-4 my-5"
            >
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ej: juanperez@mail.com"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message: "El email debe tener un formato valido, por ej: juanperez@mail.com",
                    },
                  })}
                />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: "La contraseña es un dato ogligatorio",
                    pattern: {
                      value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.",
                    },
                  })}
                />
                <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-5">
                Iniciar sesión
              </Button>
              {errorLogin && <Alert variant="danger">{errorLogin}</Alert>}
            </Form>
          </Col>
        </Row>
      </section>
    </section>
  );
};

export default Login;
