import axios from 'axios';

const API_KEY = process.env.MOVIE_API_KEY;
const API_URL = "https://api.themoviedb.org/3/movie/";

export const fetchMovieData = async (idMovie) => {
  const options = {
    method: 'GET',
    url: `${API_URL}${idMovie}`,
    headers: { Authorization: `Bearer ${API_KEY}` }
  };

  try {
    const movieResponse = await axios.request(options);
    const movieImgResponse = await axios.request({
      ...options,
      url: `${API_URL}${idMovie}/images`
    });
    return { movie: movieResponse.data, movieImgs: movieImgResponse.data };
  } catch (err) {
    console.error("Error fetching movie data: ", err);
    throw err;
  }
};