import React from "react";
import ReactDOM from "react-dom";
import '../assets/mystyle.css';
import App from './App';

// index.jsがreactの元となるファイルになる
const app = document.getElementById('app');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  app
);