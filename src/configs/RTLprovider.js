import { createMuiTheme } from '@material-ui/core/styles';
import { faIR } from '@material-ui/core/locale';
import Yekan from '../asset/font/Yekan.ttf'

export const theme = createMuiTheme({
  typography: {
    fontFamily: Yekan,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Yekan],
      },
    },
  },
  palette: {
    // change theme color here :
    primary: { main: '#3f51b5' },

  },
}, faIR);



export const fontTheme = createMuiTheme({
  typography: {
    fontFamily: Yekan,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Yekan],
      },
    },
  },
});