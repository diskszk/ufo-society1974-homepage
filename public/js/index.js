import React from "react";
import ReactDOM from "react-dom";
import Lyric from './components/Lyric';

const Layout = () => {
  return (
    <Lyric />
  );
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);