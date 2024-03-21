import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './rotas/App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Favoritos from './rotas/Favoritos';
import Header from './componentes/Header';


const GlobalStyle = createGlobalStyle `
  body {
    text-decoration: none;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52, #326589);
    
  }

  p {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    text-decoration: none;
  }

  img {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    text-decoration: none;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    }

`
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = {<App />} />
      <Route path="/favoritos" element = {<Favoritos />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
