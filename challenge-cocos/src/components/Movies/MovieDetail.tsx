import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Movie  } from '@/types';
import Link from '@mui/material/Link';

interface MovieDetailProps {
  movie: Movie;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({movie}) => {
    console.log(movie)
  return (
    <Card>
      <Link href={`/movies/detail/${movie.id}`} underline="none">
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="Movie poster"
        />
      </Link>
    </Card>
  );
};