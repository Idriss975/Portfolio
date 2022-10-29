import './global.scss';
import './lang/i18n';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
if (location.hostname.split('.')[0] === "cv")
    location.href = "https://www.berchil.in/assets/documents/Berchil_Idriss_CV.pdf";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
