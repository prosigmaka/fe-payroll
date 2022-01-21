import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    background: { default: '#e4f0e2' },
    common: {
      main: '#1d413d',
      accent: '#F98535',
      accent_dark: '#d87432',
      neutral_gray_dark: '#4c5352',
      neutral_gray_medium: '#8C9795',
      neutral_white: '#FFF',
      neutral_white_medium: '#E8F1F2',
      neutral_white_medium2: '#D6F9C8',
      neutral_white_medium3: '#F1FDED',
      success: '#06D6A0',
      danger: '#EF476F',
      disabled: '#C4C4C4',
      pending: '#FFD166',
    },
    primary: {
      main: '#54C2B7',
    },
    secondary: {
      main: '#61D4C3',
    },
    error: {
      main: '#EF476F',
    },
    success: {
      main: '#06D6A0',
    },
    warning: {
      main: '#FFD166',
    },
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 700,
      fontSize: '1.7rem',
    },
    h2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h3: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#4c5352',
    },
  },
});
