import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { CounterContext } from './context/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CounterContext>
  </React.StrictMode>
);
