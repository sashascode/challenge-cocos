import React, { useState, useEffect } from 'react';
import { Movie } from '@/types';
import { searchMovie } from '@/services/movieAPI';
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