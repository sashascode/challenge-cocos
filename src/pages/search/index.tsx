import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {Box, CssBaseline} from '@mui/material';
import { Movie } from '@/types';
import { searchMovie } from '@/services/movieAPI';
import { MovieItem } from '@/components/Movies/MovieItem';
import { Grid } from '@mui/material';

// TODO: Agregar estilos a los resultados de la búsqueda

const SearchPage = () => {
  const [query, setQuery] = useState<null | string>(null);
  const [results, setResults] = useState<null | Movie[]>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    searchMovie(query).then(data => setResults(data));
  }, [query]);

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <>
    <Box
    sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 4
    }}
    >
      <Stack spacing={2} sx={{ width: '80%' }}>
        <StyledTextField
          label="Search movie"
          InputProps={{
            type: 'search',
            style: { color: '#ffffff', fontSize: '20px' },
            value: query,
            onChange: (e: any) => setQuery(e.target.value)
          }}
        />
      </Stack>

    </Box>

    <Grid container spacing={1}>
      {
        results &&
        results?.map((m) => {
          return <Grid container item xs={1} key={m.id} spacing={1}> <MovieItem movie={m}/> </Grid>
        })
      }
    </Grid>
    </>
  )
}

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#606474'
  },
  '& .MuiInput-input': {
    color: '#ffffff'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff', // Border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#black', // Border when hovered color
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#black', // Border when focused color
  },
  '& .MuiFormLabel-root': {
    color: '#ffffff', // Text color
    fontSize: '20px'
  },
});


export default SearchPage;