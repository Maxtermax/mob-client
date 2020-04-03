const BASE = "https://api.themoviedb.org/3";
const TMDB_KEY = "40dc6906b213f1898b4fa8730d5dd8a8";

const url = `${BASE}/discover/movie?api_key=${TMDB_KEY}&certification_country=US`;
export const fetchMovies = async ({ year = 2010, page = 1 }) =>
  (await fetch(`${url}&primary_release_year=${year}&page=${page}`)).json();
