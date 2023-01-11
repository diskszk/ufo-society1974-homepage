import { Link, useLocation } from "react-router-dom";
import { PageHeader, AlbumImage, Description, Container } from "./styles";
import { ServiceList } from "../components/ServiceList";
import { SongListTable } from "../components/SongListTable";
import { getSongs } from "../lib/getSongsAPI";
import { useFetch } from "../hooks/useFetch";
import { getSingleAlbum } from "../lib/getSingleAlbumAPI";

export const AlbumDetailPage: React.FC = () => {
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  const { data: album } = useFetch(["album", albumId], () =>
    getSingleAlbum(albumId)
  );

  const { data: songs } = useFetch(["songs"], () => getSongs(albumId));

  return (
    <article className="space-bottom">
      <PageHeader>{album?.title}</PageHeader>
      <Container>
        <AlbumImage src={album?.imageFile.path} alt={album?.title} />
        {album?.publishPlatform && (
          <ServiceList services={album?.publishPlatform} />
        )}
        {album?.description !== "" && (
          <Description>{album?.description}</Description>
        )}
      </Container>

      {songs && songs.length > 0 && <SongListTable songs={songs} />}
      <br />
      <Link to="/">もどる</Link>
    </article>
  );
};
