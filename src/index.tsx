import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from '@/styles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
