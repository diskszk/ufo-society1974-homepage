import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";
import { PageHeader, AlbumImage, Discription, Container } from "./styles";
import { Album } from "../types";
import { getSingleAlbum } from "../lib/getSingleAlbum";
import { NO_IMAGE_PATH } from "../constans";
import ServiceList from "../components/ServiceList";

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
        <Discription>{"discription"}</Discription>
        <ServiceList services={album.services} />
        <p>songs</p>
        <p>{albumId}</p>

        <Link to="/">もどる</Link>
      </Container>
    </article>
  );
};

export default AlbumDetailPage;
