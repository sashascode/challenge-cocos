import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Movie } from '@/types';
import Slider from '@/components/Slider';
import { MovieItem } from '@/components/Movies/MovieItem';

const SliderProps = {
  zoomFactor: 10, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 5,
  pageTransition: 500 // Transition when flipping pages
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeMovie, setActiveMovie] = useState<Movie>(
    {} as Movie
  );

  const handleDialogOpen = (movie: Movie) => {
    setIsDialogOpen(true);
    setActiveMovie(movie);
  };

  // TODO: Hacer funcion para los requests
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `${process.env.MOVIE_API_URL}popular`, // TODO: Guadar en .env
      headers: {
        Authorization: `Bearer ${process.env.MOVIE_API_KEY}`
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
    <main>
      <Container>
        <Title variant="h4">Most popular</Title>

        <Slider {...SliderProps}>
          {movies?.map(movie => (
            <MovieItem movie={movie} key={movie.id}/>
          ))}
        </Slider>
      </Container>
    </main>
  )
}

const Title = styled(Typography)`
  && {
    color: #ffffff;
    margin-top: 2rem;
    margin-left: -1rem;
    font-size: 20px;
    position: relative;
    left: 3.5rem;
    font-weight: bold;
  }
`;
