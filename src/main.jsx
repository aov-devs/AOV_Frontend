import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/AppRouter';
import theme from './theme/theme';
import { AuthProvider } from './context/AuthContext';
import './theme/main.scss';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
