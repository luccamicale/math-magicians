import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './pages/calculator';
import NavLink from './components/nav';
import './modules-css/calculator.css';
import './modules-css/nav.css';
import Home from './pages/Home';
import Quote from './pages/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <div className="header">
          <NavLink />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
);
