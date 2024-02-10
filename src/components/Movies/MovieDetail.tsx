import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Movie  } from '@/types';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

interface MovieDetailProps {
  movie: Movie;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({movie}) => {
  console.log("detail")
  return (
    <Container maxWidth="sm">
       
    </Container>
  );
};