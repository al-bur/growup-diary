import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent';
import Parent2 from './Parent2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Parent2 />
  // </React.StrictMode>
);
