import { Movie, MovieImages } from "@/types";
import axios from "axios";

const API_KEY = process.env.MOVIE_API_KEY;
const MOVIE_API_URL = process.env.MOVIE_API_URL;
const SEARCH_API_URL = process.env.SEARCH_API_URL;

interface MovieData {
  movie: Movie;
  movieImgs: MovieImages;
}

type GetMovieDataFn = (a: string) => Promise<MovieData>;
type SearchMovieFn = (a: string) => Promise<Movie[]>;

export const fetchMovieData: GetMovieDataFn = async (idMovie) => {
  const options = {
    method: 'GET',
    url: `${MOVIE_API_URL}${idMovie}`,
    headers: { Authorization: `Bearer ${API_KEY}` }
  };

  try {
    const movieResponse = await axios.request(options);
    const movieImgResponse = await axios.request({
      ...options,
      url: `${MOVIE_API_URL}${idMovie}/images`
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
    url: `${SEARCH_API_URL}movie?query=${query}`,
    headers: { Authorization: `Bearer ${API_KEY}` }
  };

  try {
    const results = await axios.request(options);
    return results.data.results;
  }
  catch(error) {
    console.error("Error fetching movies result: ", error);
    throw error;
  }
};
