import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OnBoarding from './on-boarding/OnBoarding';
import Maps from './maps/Maps';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="on-boarding" element={<OnBoarding />} />
          <Route path="maps" element={<Maps />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
