import React, { useEffect, useState } from "react";
import AlbumListItem from "../components/AlbumListItem";
import style from "styled-components";
import { getAlbums } from "../lib/getAlbums";
import { Album } from "../types";
import { MIN_WIDTH } from "../constants";
import { PageHeader } from "./styles";
import { useDispatch } from "react-redux";
import {
  createFailRequestAction,
  createStartRequestAction,
  createSuccessRequestAction,
} from "../store/ModalStatusReducer";

const Ul = style.ul`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;

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
      dispatch(createStartRequestAction());
      const fetchedAlbums: Album[] = await getAlbums();
      setAlbums(fetchedAlbums);

      dispatch(createSuccessRequestAction());
    } catch {
      dispatch(
        createFailRequestAction(
          "アルバムの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
        )
      );
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
      <br />
    </article>
  );
};

export default AlbumListPage;
