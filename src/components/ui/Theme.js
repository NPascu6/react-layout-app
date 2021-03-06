import { createMuiTheme } from '@material-ui/core/styles';

const norboBlue = '#2F828D';
const norboOrange = '#FFBA60';
const norboGreen = '#00ff00';
const norboGray = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: norboBlue,
      green: norboGreen,
      norboOrange,
    },
    primary: {
      main: norboBlue,
    },
    secondary: {
      main: norboOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Railway',
      textTransform: 'none',
      fontWeight: 300,
      fontSize: '1.5rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Railway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: norboBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: norboBlue,
    },
    h4: {
      fontFamily: 'Railway',
      fontSize: '1.7rem',
      color: norboBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Railway',
      fontSize: '1.2rem',
      color: norboGray,
    },
    subtitle2: {
      fontFamily: 'Railway',
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 'bold',
    },
    learnButton: {
      borderColor: norboBlue,
      color: norboBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.25rem',
      color: norboGray,
    },
  },
});
