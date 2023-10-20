import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { fetchMovieDetails } from "../../api";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="dp-hero-section" style={backgroundImageStyle}>
      <div >
        <div className="navbar w-100 d-flex justify-content-between align-items-center px-4 bg-transparent">
          <a
            className="text-decoration-none text-danger fs-1 fw-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Movielist
          </a>
          <div className="dp-navbar-search shadow position-relative overflow-hidden w-25">
            <input
              className="w-100 h-25 text-white rounded-5 py-2 ps-2 fs-6"
              type="text"
              placeholder="Search for a movie..."
            />
            <button className="search-icon text-white fs-5 bg-transparent position-absolute top-0 end-0 me-1 border-0">
              <HiSearch />
            </button>
          </div>
          <div>
            <button className="btn border border-danger rounded-5 bg-transparent text-danger fw-bold py-1 px-4 fs-6 me-2">
              Login
            </button>
            <button className="btn border-danger rounded-5 bg-danger rounded-5 text-white py-1 px-3 fs-6">
              Register
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5">
          <div className="dp-hero-content text-white w-50 ps-3 pe-1 pb-5">
            <h1 className="fs-1 fw-bold my-4 overflow-hidden">{movie.title}</h1>
            <div className="movie-genre d-inline-block mt-2 mb-4 p-2">
              <span className="me-3">Genres:</span>
              {movie.genres.map((genre) => (
                <div className="d-inline-flex border py-2 px-3" key={genre.id}>
                  {genre.name}
                </div>
              ))}
            </div>
            <p className="mt-0 mb-4">{movie.overview}</p>
            <div className="d-flex align-items-center mt-3 mb-5 gap-2">
              <AiOutlineStar className="rate-star" />
              {movie.vote_average} / 10
            </div>
            <button className="btn-trailer py-2 border-0 rounded-5">
              <a
                href={`https://api.themoviedb.org/3/movie/${id}/videos?api_key=bd0af39a72aa4f0031d784df2908bbb0&language=en-US`}
                className="text-decoration-none fw-bold m-auto d-flex justify-content-center gap-1 align-items-center text-white"
              >
                <AiOutlinePlayCircle className="fs-5 text-warning" /> WATCH TRAILER
              </a>
            </button>
          </div>
          <img
            className="movie-poster h-50 d-flex ms-auto me-5 mt-1 border border-2 border-dark rounded"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
