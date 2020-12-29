import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import { PageHeader, AlbumImage, Discription, Container } from "./styles";
import { Album, Song } from "../types";
import { getSingleAlbum } from "../lib/getSingleAlbum";
import { NO_IMAGE_PATH } from "../constans";
import ServiceList from "../components/ServiceList";
import SongListTable from "../components/SongListTable";
import { getSongs } from "../lib/getSongs";
import { startRequest } from "../store/LoadingStatusReducer";
import { faileRequest, successRequest } from "../store/ModalStatusReducer";

interface Props extends RouteComponentProps<{}> {}

const AlbumDetailPage: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const [album, setAlbum] = useState<Album>({
    discription: "",
    imageFile: {
      filename: "",
      path: NO_IMAGE_PATH,
    },
    id: "",
    publish_date: "",
    title: "Loading...",
    services: {
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
      dispatch(startRequest());
      await Promise.all([fetchAlbum(), fetchSongs()]);
      dispatch(successRequest());
    } catch (e) {
      console.error(e.message);

      dispatch(
        faileRequest(
          "データの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
        )
      );
    }
  };

  useEffect(() => {
    fetchAll();
  }, [setAlbum, setSongs]);
  return (
    <article>
      <PageHeader>{album.title}</PageHeader>
      <Container>
        <AlbumImage src={album.imageFile.path} alt={album.title} />
        <ServiceList services={album.services} />
        <Discription>{"discription"}</Discription>
      </Container>
      {songs.length > 0 && <SongListTable songs={songs} />}
      <p>{albumId}</p>

      <Link to="/">もどる</Link>
    </article>
  );
};

export default AlbumDetailPage;
