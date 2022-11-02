import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/calculator';
import './components/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
