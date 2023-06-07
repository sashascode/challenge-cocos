import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Movie } from '@/types';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import styled from '@emotion/styled';

type StyledDivProps = {
  imageUrl: string | undefined;
};

const StyledDiv = styled.div<StyledDivProps>`
  position: relative;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${props.imageUrl})`};
`;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const idMovie = context.params?.idMovie;
  
    if (typeof idMovie !== 'string') {
        console.log("Error")
      return {
        notFound: true,
      };
    }
  
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${idMovie}`,
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODc1MmUzMWFiZTcwNjBmMGQ3MzNiYTI1NmJhZmFmMiIsInN1YiI6IjY0NTU5ZDMxNWEwN2Y1MDE3YzhhMmE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4UVrOIJcnN-NvWlxX6CLMM3eOgkMqD5fy3Bq7pRlDg'
        }
    };
  
    const response = await axios.request(options);
    const responseImg = await axios.request({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${idMovie}/images`,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODc1MmUzMWFiZTcwNjBmMGQ3MzNiYTI1NmJhZmFmMiIsInN1YiI6IjY0NTU5ZDMxNWEwN2Y1MDE3YzhhMmE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4UVrOIJcnN-NvWlxX6CLMM3eOgkMqD5fy3Bq7pRlDg'
        }
    })

    const movieImgs: any = responseImg.data;
    const movie: Movie = response.data;                 
    return { props: { movie, movieImgs } };
};

interface MovieDetailProps {
  movie: Movie;
  movieImgs: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, movieImgs }) => {
  const router = useRouter();

  if(movie) {
    console.log(movie);
  }

  if(movieImgs) {
    console.log(movieImgs)
  }
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <StyledDiv imageUrl={`https://image.tmdb.org/t/p/original/${movieImgs?.backdrops[2].file_path}`}>
      
    </StyledDiv>
  );
};

export default MovieDetail;
