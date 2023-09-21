import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App title={'The Grand Budapest Hotel'} date={2014} genre={'Drama'} />
  </React.StrictMode>,
);
