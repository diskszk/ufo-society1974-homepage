import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import { PageHeader, AlbumImage, Discription, Container } from "./styles";
import { Album } from "../types";
import { getSingleAlbum } from "../lib/getSingleAlbum";
import { NO_IMAGE_PATH } from "../constans";
import ServiceList from "../components/ServiceList";
import SongListTable from "../components/SongListTable";

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

  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  const fetch = async () => {
    try {
      const fetchedAlbum: Album = await getSingleAlbum(albumId);
      setAlbum(fetchedAlbum);
      console.dir(fetchedAlbum);
    } catch (e) {
      console.error(e);

      //
      history.push("/");
    } finally {
    }
  };
  useEffect(() => {
    fetch();
  }, [setAlbum]);
  return (
    <article>
      <PageHeader>{album.title}</PageHeader>
      <Container>
        <AlbumImage src={album.imageFile.path} alt={album.title} />
        <ServiceList services={album.services} />
        <Discription>{"discription"}</Discription>
      </Container>
      <SongListTable />
      <p>{albumId}</p>

      <Link to="/">もどる</Link>
    </article>
  );
};

export default AlbumDetailPage;
