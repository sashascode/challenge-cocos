import { Container, Grid, Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import styled from "@emotion/styled";
import {FormControl, InputLabel, Input} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {TextField} from "@mui/material";
import {Paper, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import DirectionsIcon from '@mui/icons-material/Directions';
import { borderRadius } from "@mui/system";


export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 300, borderRadius: 10, backgroundColor: "rgba(234, 28, 36, 0.8)"}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for Movies"
        inputProps={{ 'aria-label': 'search for movies' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <MenuIcon />
      </IconButton>
    </Paper>
    
  );
}


