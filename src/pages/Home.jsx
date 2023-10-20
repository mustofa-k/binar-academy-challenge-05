import { useEffect, useState } from "react";
import {searchMovies } from "../../api";
import {Col,Row,Card,Container,Navbar,Button,Nav,InputGroup,FormControl} from 'react-bootstrap';
import { useNavigate ,Link} from 'react-router-dom';


import CarouselHome from "../components/Carousel";
import { toast } from "react-toastify";
import axios from "axios";


function Home() {
  const [moviePopular, setMoviePopular] = useState([]);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  useEffect(() => {
    const getMovieList = async () => {
      try {
        const token = localStorage.getItem("token");

        const movie = await axios.get(
          "https://shy-cloud-3319.fly.dev/api/v1/movie/popular",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = movie.data.data;
        setMoviePopular(data);

      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMovieList();
  }, []);


  const MovieList = () => {
    const navigate = useNavigate();

    const handleCardClick = (movieId) => {
      navigate(`/detail/${movieId}`);
    };
  
    return (
      <Container className="list">
        <Row>
          {moviePopular.map((movie, index) => (
            <Col key={index} md="3" onClick={() => handleCardClick(movie.id)} style={{ cursor: 'pointer' }}>
              <Card  style={{ width: '18rem', backgroundColor: 'wheat', margin:'10px'}}>
                <Card.Title className="text-center mt-4 md-4" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                  {movie.title}
                </Card.Title>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Text>
                    <h4>Release: {movie.release_date}</h4>
                    
                  </Card.Text>
                  <Card.Text className="text-danger fw-bold">
                    {movie.vote_average} / 10
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  

  const search = async (q) => {
    if (q.length > 2) {
      const query = await searchMovies(q);
      setMoviePopular(query.data);
    }
  };
  console.log({ moviePopular: moviePopular });
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" className="navbar" fixed="top">
  <Container>
    <Navbar.Brand className="text-danger fw-bold" as={Link} to="/">
      Movielist
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto"></Nav>
      <InputGroup className="mb-3 mx-auto" style={{ maxWidth: '300px' }}>
        <FormControl
          placeholder="Cari..."
          onChange={({ target }) => search(target.value)}
          className="border border-danger" 
        />
      </InputGroup>
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


      <CarouselHome />
      <Container className="mt-5" >
      <Row>
        <Col md={6}>
          <h1> Popular Movie</h1>
           

        </Col>
        <Col md={6} className="d-flex justify-content-end text-danger">
        See all Movies
        </Col>
      </Row>
       
      </Container>
      <MovieList />
    </>
  );
}

export default Home;
