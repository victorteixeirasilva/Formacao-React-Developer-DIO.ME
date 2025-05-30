import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home/App';
import GlobalStyle from "./styles"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

