import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    reset();
  };

  return (
    <section>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <h3 className="text-center mb-4">Registro</h3>
              <Form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                <Form.Text className="text-info mb-3">Los campos con un (*) son obligatorios.</Form.Text>

                <Form.Group className="mt-2" controlId="nombre">
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Juan Pérez"
                    {...register("nombre", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 2,
                        message: "Debe tener al menos 2 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mt-2" controlId="email">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="correo@ejemplo.com"
                    {...register("email", {
                      required: "El email es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "El email no es válido",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mt-2" controlId="password">
                  <Form.Label>Contraseña*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 6,
                        message: "Debe tener al menos 6 caracteres",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mt-2" controlId="confirmPassword">
                  <Form.Label>Confirmar contraseña*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="••••••"
                    {...register("confirmPassword", {
                      required: "Debes confirmar la contraseña",
                      validate: (value) => value === password || "Las contraseñas no coinciden",
                    })}
                  />
                  <Form.Text className="text-danger">{errors.confirmPassword?.message}</Form.Text>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-4 w-100">
                  Registrarse
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registro;
