import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Movie, MovieImages } from '@/types';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StarsIcon from '@mui/icons-material/Stars';
import { fetchMovieData } from '../../../services/movieAPI'
import useMovieDetails from '@/hooks/useMovieDetails';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// TODO: Agregar placeholders de carga o spinners -> Skeleton en Material UI

type StyledDivProps = {
  imageUrl: string | undefined;
};

const StyledChip = styled(Chip)`
  background-color: #101419;
  color: white;
  position: relative;
  top: 10px;
  font-weight: bold;
`;

const StyledDiv = styled.div<StyledDivProps>`
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${props => props.imageUrl});
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const idMovie = context.params?.idMovie;

  if (typeof idMovie !== 'string') {
    console.log("Error");
    return {
      notFound: true,
    };
  }

  const {movie, movieImgs} = await fetchMovieData(idMovie);
          
  return { props: { movie, movieImgs } };
};

interface MovieDetailProps {
  movie: Movie;
  movieImgs: MovieImages;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, movieImgs }) => {
  const router = useRouter();
  const {logo, background, genresNames} = useMovieDetails(movie, movieImgs);
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      { background &&
        <StyledDiv imageUrl={background}>
          <ArrowBackIcon/>
          <Box position="relative" left="50px" top="100px">
            {
              logo &&
              <Box>
                <Image
                src={logo}
                alt={`logo ${movie.title}`}
                width={350}
                height={150}
                />
              </Box>
            }
            <Box sx={{display: "flex", gap: "1.5rem"}}>
              { 
                genresNames &&
                <Typography sx={{fontSize: 15, color: '#fff', marginTop: 2}}>
                  {genresNames}
                </Typography>
              }

              <StyledChip
                avatar={<StarsIcon sx={{color: "#F3D34A !important"}}/>}
                label={movie.vote_average.toFixed(1)}
              />
              
            </Box>
            
            <Typography sx={{fontSize: 18, color: '#fff', marginTop: 2, width: "40%"}}>
              {movie.overview}
            </Typography>

            
            
          </Box> 
        </StyledDiv>
      }
    </>
    
  );
};

export default MovieDetail;
