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
import Button from "../components/CustomButton";
import Modal from "../components/CustomModal";
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
    try {
      dispatch(startRequest());
      const fetchedAlbum: Album = await getSingleAlbum(albumId);
      setAlbum(fetchedAlbum);

      dispatch(successRequest());
    } catch (e) {
      console.error(e);
      dispatch(faileRequest(e.message));

      history.push("/");
    }
  };
  const fetchSongs = async () => {
    try {
      const fetchedSongs: Song[] = await getSongs(albumId);
      setSongs(fetchedSongs);
    } catch (e) {
      console.error(e);
      dispatch(faileRequest(e.message));

      history.push("/");
    }
  };

  // 並行処理したい...Promise.all?
  useEffect(() => {
    fetchAlbum();
    fetchSongs();
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
