import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import { PageHeader, AlbumImage, Discription, Container } from "./styles";
import { Album, Song } from "../types";
import { getSingleAlbum } from "../lib/getSingleAlbum";
import { NO_IMAGE_PATH } from "../constans";
import ServiceList from "../components/ServiceList";
import SongListTable from "../components/SongListTable";
import { getSongs } from "../lib/getSongs";

interface Props extends RouteComponentProps<{}> {}

const AlbumDetailPage: React.FC<Props> = ({ history }) => {
  const [album, setAlbum] = useState<Album>({
    discription: "",
    imageFile: {
      filename: "",
      path: NO_IMAGE_PATH,
    },
    id: "",
    publish_date: "",
    title: "",
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
      const fetchedAlbum: Album = await getSingleAlbum(albumId);
      setAlbum(fetchedAlbum);
    } catch (e) {
      console.error(e);

      //
      history.push("/");
    }
  };
  const fetchSongs = async () => {
    try {
      const fetchedSongs: Song[] = await getSongs(albumId);
      setSongs(fetchedSongs);
    } catch {
      //
      history.push("/");
    }
  };
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
