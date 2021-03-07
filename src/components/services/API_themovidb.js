import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const BaseApiMovies = "https://api.themoviedb.org/3";

const API_KEY = "a15f9b7f27bd19853a969d23685d4c4f";

const fetchPopularFilms = () => {
  return fetch(
    `${BaseApiMovies}/trending/movie/day?api_key=${API_KEY}`
  ).then((res) => res.json());
};

const fetchFilmWithQuery = (searchQuery) => {
  return get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`
  );
};

const fetchFilmDetails = (movieId) => {
  return get(`/movie/${movieId}?api_key=${API_KEY}`);
};

const fetchFilmActors = (movieId) => {
  return get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
};

const fetchFilmReviews = async (movieId) => {
  return get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

const get = async (url) => {
  try {
    return axios.get(url).then((res) => res.data);
  } catch (err) {
    throw err;
  }
};

export default {
  fetchPopularFilms,
  fetchFilmDetails,
  fetchFilmWithQuery,
  fetchFilmActors,
  fetchFilmReviews,
};