import { createTheme } from '@material-ui/core';

const theme = createTheme({
  color: {
    primary: '#42a5f5',
    secondary: '#ba68c8',
    error: '#ef5350',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#4caf50',
    textColor: 'white',
    borderColor: '#cccccc',
  },
});

export default theme;
