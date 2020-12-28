import React, { useEffect, useState } from "react";
import AlbumListItem from "../components/AlbumListItem";
import style from "styled-components";
import { getAlbums } from "../lib/getAlbums";
import { Album } from "../types";
import { MIN_WIDTH } from "../constans";
import { PageHeader } from "./styles";

const Ul = style.ul`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;

  // PC
  @media (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const AlbumListPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetch = async () => {
    try {
      const fetchedAlbums: Album[] = await getAlbums();
      setAlbums(fetchedAlbums);
    } catch (e) {
      console.error(e);
    }
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
