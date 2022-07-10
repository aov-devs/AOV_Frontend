import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import theme from './theme/theme';
import './theme/main.scss';
import { ThemeProvider } from '@emotion/react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
