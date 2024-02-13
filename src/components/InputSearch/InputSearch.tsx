import { Box, Stack, TextField, styled } from '@mui/material'
import React from 'react'

interface InputSearchProps {
  setQuery: (query: string) => void;
  query: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ setQuery, query }) => {
  return (
    <Box sx={{ 
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

export default InputSearch;