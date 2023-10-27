import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11A0DB',
      light: '#11A0DB4D',
    },
    secondary: {
      main: '#424243',
    },
    background: {
      default: '#ffffff',
    },
    common: {
      white: '#fff',
      black: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '28px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '24px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '20px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 500,
    },
  },
});

export default theme;
