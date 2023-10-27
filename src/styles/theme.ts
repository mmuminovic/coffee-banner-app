import { createTheme } from '@mui/material/styles';

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
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: { main: '#2e7d32' },
    text: { primary: '#000', secondary: '#777', disabled: '#aaa' },
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
    h3: {
      fontSize: '22px',
      fontWeight: 500,
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
