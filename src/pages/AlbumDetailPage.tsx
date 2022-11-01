import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { PageHeader, AlbumImage, Description, Container } from "./styles";
import { Album, Song } from "../types";
import { getSingleAlbum } from "../lib/getSingleAlbum";
import { NO_IMAGE_PATH } from "../constants";
import ServiceList from "../components/ServiceList";
import SongListTable from "../components/SongListTable";
import { getSongs } from "../lib/getSongs";
import { createStartRequestAction } from "../store/LoadingStatusReducer";
import {
  createFailRequestAction,
  createSuccessRequestAction,
} from "../store/ModalStatusReducer";

const AlbumDetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const [album, setAlbum] = useState<Album>({
    description: "",
    imageFile: {
      filename: "",
      path: NO_IMAGE_PATH,
    },
    id: "",
    publishedDate: "",
    title: "Loading...",
    publishPlatform: {
      AppleMusic: "",
      Spotify: "",
      iTunes: "",
      Bandcamp: "",
    },
  });
  const [songs, setSongs] = useState<Song[]>([]);

  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  const fetchAlbum = async () => {
    const fetchedAlbum: Album = await getSingleAlbum(albumId);
    setAlbum(fetchedAlbum);
  };
  const fetchSongs = async () => {
    const fetchedSongs: Song[] = await getSongs(albumId);
    setSongs(fetchedSongs);
  };
  const fetchAll = async () => {
    try {
      dispatch(createStartRequestAction());
      await Promise.all([fetchAlbum(), fetchSongs()]);
      dispatch(createSuccessRequestAction());
    } catch {
      dispatch(
        createFailRequestAction(
          "データの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
        )
      );
    }
  };

  useEffect(() => {
    fetchAll();
  }, [setAlbum, setSongs]);
  return (
    <article className="space-bottom">
      <PageHeader>{album.title}</PageHeader>
      <Container>
        <AlbumImage src={album.imageFile.path} alt={album.title} />
        {album.publishPlatform && (
          <ServiceList services={album.publishPlatform} />
        )}
        {album.description !== "" && (
          <Description>{album.description}</Description>
        )}
      </Container>

      {songs.length > 0 && <SongListTable songs={songs} />}
      <br />
      <Link to="/">もどる</Link>
    </article>
  );
};

export default AlbumDetailPage;
