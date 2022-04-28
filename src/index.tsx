import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch5/unit4/App';
import './App.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
