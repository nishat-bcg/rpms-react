import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import './index.css';
import { defaultTheme } from 'src/utils/theme';
import SnackBarProvider from 'src/utils/providers/Snackbar';
import store from 'src/stores/index';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackBarProvider>
        <Router>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </Router>
      </SnackBarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
