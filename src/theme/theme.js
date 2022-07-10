import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export default responsiveFontSizes(
  createTheme({
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  })
);
