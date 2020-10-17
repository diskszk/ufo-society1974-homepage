import React from "react";
import ReactDOM from "react-dom";
import '../assets/mystyle.css';
import AllSongs from "./components/AllSongs";

// reactの元となるファイル
const Layout = () => {
  return (
    <div className="lyric-page">
      <AllSongs />
    </div>
  );
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);