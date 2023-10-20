import { useEffect, useState } from "react";
import { Navbar, Container, Nav ,Button} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar">
      <Container>
        <Navbar.Brand className="text-danger fw-bold" as={Link} to="/">
        Movielist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/users/dashboard"}>
                <Button variant="outline-danger">Dashboard</Button>
                  
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLoggedIn(false);
                    return navigate("/");
                  }}
                >
                  <Button variant="danger">Logout</Button>
                  
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={"/login"}>
                <Button variant="outline-danger">Login</Button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                <Button variant="danger">Register</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;