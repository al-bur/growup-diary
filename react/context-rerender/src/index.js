import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './App2';
import { DataContext, data, handleData } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataContext.Provider value={{ data, handleData }}>
      <App />
      <App2 />
    </DataContext.Provider>
  </React.StrictMode>
);
