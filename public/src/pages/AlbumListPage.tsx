import React, { useEffect, useState } from "react";
import AlbumListItem from "../components/AlbumListItem";
import style from "styled-components";
import { getAlbums } from "../lib/getAlbums";
import { Album } from "../types";
import { MIN_WIDTH } from "../constans";
import { PageHeader } from "./styles";
import { useDispatch } from "react-redux";
import {
  faileRequest,
  startRequest,
  successRequest,
} from "../store/LoadingStatusReducer";

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
    width: 100%;
  }
`;

const AlbumListPage: React.FC = () => {
  const dispatch = useDispatch();
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetch = async () => {
    try {
      dispatch(startRequest());
      const fetchedAlbums: Album[] = await getAlbums();
      setAlbums(fetchedAlbums);

      throw new Error("error!!");

      dispatch(successRequest());
    } catch (e) {
      console.error(e);
      dispatch(faileRequest(e.message));
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
