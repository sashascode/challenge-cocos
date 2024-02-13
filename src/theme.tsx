import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#D51F2D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#0D0C0F' // this sets the default background color to black
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif', // sets global font
    h5: {
      color: '#ffffff'
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fieldset: {
            borderColor: '#ffffff'
          },
          color: '#ffffff'
          
        }
      }
      
    }
  }
});

export default theme;
