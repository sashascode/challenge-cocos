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
import { MoviesContainer } from '@/components/Movies/MoviesContainer';
import InputSearch from '@/components/InputSearch/InputSearch';

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
      <InputSearch setQuery={setQuery} query={query || ''} />
      <MoviesContainer movieList={results || []} />
    </>
  )
}

export default SearchPage;