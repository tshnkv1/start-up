import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4A4A4A',
    },
    secondary: {
      main: '#1A1A1A',
    },
    background: {
      default: '#B0B0B0',
      paper: '#8A8A8A',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#4A4A4A',
      paper: '#8A8A8A',
    },
  },
});

export { lightTheme, darkTheme };
