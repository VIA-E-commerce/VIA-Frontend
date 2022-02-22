import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from '@/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </QueryClientProvider>,
  document.getElementById('root'),
);
