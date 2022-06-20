import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fetcher from './Fetcher';
import ErrorBoundary from './ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      <Fetcher />
    </ErrorBoundary>
  </React.StrictMode>
);
