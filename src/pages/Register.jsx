import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import GoogleLogin from "../components/GoogleLogin";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        name,
        email,
        password,
      });

      let config = {
        method: "post",
        // url: `${import.meta.env.VITE_API}/v1/auth/register`,
        url: "https://shy-cloud-3319.fly.dev/api/v1/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      navigate("/login");

      // Temporary solution
      window.location.href = "/login";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <Container className="container p-5 border border-3 rounded-3">
      <h3 className="overflow-hidden text-center mb-3 fw-bold">REGISTER</h3>
      <Row>
        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" type="submit" className="d-flex justify-content-center w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer/>
      {/* <Row>
        <Col>
          <h4 className="text-center">Or</h4>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <GoogleLogin buttonText="Register with Google 🚀" />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Register;