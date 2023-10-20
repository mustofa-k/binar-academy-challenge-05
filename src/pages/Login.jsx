import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from "../components/GoogleLogin";
// import GoogleLogin from 'react-oauth-google';


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        password,
      });

      let config = {
        method: "post",
        // url: `${import.meta.env.VITE_API}/v1/auth/login`,
        url: "https://shy-cloud-3319.fly.dev/api/v1/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      localStorage.setItem("token", token);

      // navigate("/users/dashboard");
      navigate("/");

      // Temporary solution
      window.location.href = "/";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <Container className="p-5 border border-3 rounded-3">
      <h3 className="overflow-hidden text-center mb-3 fw-bold">LOGIN</h3>
      <Row className="mb-4">
        <Col>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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
            <Container className="d-flex flex-column gap-3">
              <Button variant="danger" type="submit">
                Submit
              </Button>
              <Form.Text className="text-muted">
                Dont have an account yet? Click the button below!
              </Form.Text>
              <Button variant="dark" onClick={() => navigate("/register")}>
                Register
              </Button>
              <Col className="text-center">
          <GoogleLogin  buttonText="Login with Google 🚀" />
        </Col>
            </Container>
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
          <GoogleLogin buttonText="Login with Google 🚀" />
        </Col>
      </Row> */}
    </Container>
  );
}

export default Login;
