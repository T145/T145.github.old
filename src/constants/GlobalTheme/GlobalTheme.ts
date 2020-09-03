import { createMuiTheme } from '@material-ui/core/styles';
import { blue, lightBlue } from '@material-ui/core/colors';

// https://material-ui.com/customization/globals/#global-css

const GlobalTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
  },
});

export default GlobalTheme;
