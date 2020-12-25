import React, { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";
import { getAlbums } from "../../lib/getAlbums";
import { Album } from "../../types";

// ここでfetch
const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getAlbums();
      setAlbums(res);
    };
    fetch();
  }, []);

  return (
    <ul>
      {albums.map((album, key) => {
        return <AlbumItem key={key} album={album} />;
      })}
    </ul>
  );
};

export default AlbumList;
