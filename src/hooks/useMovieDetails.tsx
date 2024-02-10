import { useState, useEffect } from 'react';
import { Movie, MovieImages } from '@/types';

const useMovieDetails = (movie: Movie, movieImgs: MovieImages) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);
  const [genresNames, setGenresNames] = useState<string>('');

  useEffect(() => {
    if(movieImgs) {
      const logoImg = movieImgs.logos.find((i) => i.iso_639_1 === "en");
      if (logoImg) {
        setLogo(`https://image.tmdb.org/t/p/w500${logoImg.file_path}`);
      }
      if (movieImgs.backdrops[0]) {
        setBackground(`https://image.tmdb.org/t/p/original${movieImgs.backdrops[0].file_path}`);
      }
    }

    if(movie) {
      let arrNames = movie.genres.map((i) => i.name);
      let str = arrNames.join(", ");
      
      setGenresNames(str);
    }
    
  }, [movieImgs, movie])

  return { logo, background, genresNames };
};

export default useMovieDetails;
