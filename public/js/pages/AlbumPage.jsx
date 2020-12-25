import React from "react";
import { fetchSongs } from "../components/fetchSongs";

const AlbumPage = () => {
  const res = fetchSongs();

  return <div>album</div>;
};

export default AlbumPage;
