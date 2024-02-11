import React from 'react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { MovieItem } from './MovieItem';
import { Movie } from '@/types';

interface MoviesContainerProps {
  movieList: Movie[];
}

export const MoviesContainer: React.FC<MoviesContainerProps> = ({ movieList }) => {
  console.log(movieList);

  return (
    <StyledContainer maxWidth={'xl'}>
      <Grid container spacing={2}>
        {movieList.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
                <MovieItem movie={movie}/>
            </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const MovieDetails = styled('div')`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: #ffff;
  font-weight: bold;

  & span {
    font-weight: 400 !important;
  }
`;
