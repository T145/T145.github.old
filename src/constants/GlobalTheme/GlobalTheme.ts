import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// https://material-ui.com/customization/globals/#global-css

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default GlobalTheme;
