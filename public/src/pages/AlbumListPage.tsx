import React, { useEffect, useState } from "react";
import AlbumListItem from "../components/AlbumListItem";
import style from "styled-components";
import { getAlbums } from "../lib/getAlbums";
import { Album } from "../types";
import { MIN_WIDTH } from "../constans";

const PageHeader = style.h1({
  fontSize: "2em",
});
const Ul = style.ul`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;

  // PC
  @media (min-width: ${MIN_WIDTH}) {
    // display: 'flex';
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const AlbumListPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetch = async () => {
    const fetchedAlbums: Album[] = await getAlbums();
    setAlbums(fetchedAlbums);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <article>
      <PageHeader>UFO societyの楽曲</PageHeader>
      <div>
        <Ul>
          {albums.map((album: Album, key) => {
            return <AlbumListItem album={album} key={key} />;
          })}
        </Ul>
      </div>
    </article>
  );
};

export default AlbumListPage;
