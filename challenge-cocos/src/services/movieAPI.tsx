import { Movie, MovieImages } from "@/types";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/`;
const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?query=`;

interface MovieData {
  movie: Movie;
  movieImgs: MovieImages;
}

type GetMovieDataFn = (a: string) => Promise<MovieData>;
type SearchMovieFn = (a: string) => Promise<Movie[]>;

export const fetchMovieData: GetMovieDataFn = async (idMovie) => {
  const options = {
    method: 'GET',
    url: `${MOVIE_DETAILS_URL}${idMovie}`,
    headers: { Authorization: `Bearer ${API_KEY}` }
  };

  try {
    const movieResponse = await axios.request(options);
    const movieImgResponse = await axios.request({
      ...options,
      url: `${MOVIE_DETAILS_URL}${idMovie}/images`
    });

    return { movie: movieResponse.data, movieImgs: movieImgResponse.data };
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    throw error;
  }
};

export const searchMovie: SearchMovieFn = async (query) => {
  const options = {
    method: 'GET',
    url: `${SEARCH_MOVIE_URL}${query}`,
    headers: { Authorization: `Bearer ${API_KEY}` }
  };

  try {
    const results = await axios.request(options);
    console.log(results.data)
    return results.data.results;
  }
  catch(error) {
    console.error("Error fetching movies result: ", error);
    throw error;
  }
};
