import axios from "axios";



export const fetchMovies = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      // `${import.meta.env.VITE_API}/v1/auth/me`,
      "https://shy-cloud-3319.fly.dev/api/v1/movie/popular",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    throw error;
  }
};


export const fetchMovieDetails = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      // `${import.meta.env.VITE_API}/v1/auth/me`,
      `https://shy-cloud-3319.fly.dev/api/v1/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    throw error;
  }
};


export const searchMovies = async (q) => {
  try {
    const token = localStorage.getItem("token");
    const search = await axios.get(
      // `${import.meta.env.VITE_API}/v1/auth/me`,
      `https://shy-cloud-3319.fly.dev/api/v1/search/movie?page=1&query=${q}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return search.data;
  } catch (error) {
    console.error("Error fetching movies: ", error);
    throw error;
  }
};

