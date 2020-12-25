import React from "react";
import AlbumList from "../components/albumList/AlbumList";

const AlbumListPage: React.FC = () => {
  const albumTitles = ["good society", "athlete"];

  return (
    <>
      <header>
        <a href="./index.html">トップページ</a>
        <h1>歌詞の記録</h1>
      </header>
      <article>
        <AlbumList />
      </article>
    </>
  );
};

export default AlbumListPage;
