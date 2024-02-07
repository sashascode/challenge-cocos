// import React from 'react';
// import styled from '@emotion/styled';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import { MovieItem } from './MovieItem';
// import { Movie } from '@/types';

// interface MoviesContainerProps {
//   movieList: Movie[];
// }

// export const MoviesContainer: React.FC<MoviesContainerProps> = ({ movieList }) => {
//   console.log(movieList);

//   return (
//     <Container>
//       <Grid container spacing={2}>
//         {movieList.map((movie) => (
//           <MovieItem movie={movie}/>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// const MovieDetails = styled('div')`
//   display: none;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   padding: 1rem;
//   background: rgba(0, 0, 0, 0.5);
//   color: #ffff;
//   font-weight: bold;

//   & span {
//     font-weight: 400 !important;
//   }
// `;

// const StyledCard = styled(Card)`
//   position: relative;
//   cursor: pointer;

//   &:hover {
//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
//       z-index: 1;
//     }

//     ${MovieDetails} {
//       display: block;
//       z-index: 2;
//     }
//   }
// `;
