import React from 'react';
import ReactDOM from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css'
import './components/media/style.css';
import Main from './components/Main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
