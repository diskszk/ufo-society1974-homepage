import { Link, useLocation } from "react-router-dom";
import {
  StyledHeading,
  StyledImage,
  StyledParagraph,
  StyledContainer,
} from "./styles";
import { ServiceList } from "../components/ServiceList";
import { SongListTable } from "../components/SongListTable";
import { useFetch } from "../hooks/useFetch";
import { fetchAlbum, fetchSongs } from "../lib";

export const AlbumDetailPage: React.FC = () => {
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  const { data: album } = useFetch(["album", albumId], () =>
    fetchAlbum(albumId)
  );

  const { data: songs } = useFetch(["songs"], () => fetchSongs(albumId));

  return (
    <article className="space-bottom">
      <StyledHeading>{album?.title}</StyledHeading>
      <StyledContainer>
        <StyledImage src={album?.imageFile.path} alt={album?.title} />
        {album?.publishPlatform && (
          <ServiceList services={album?.publishPlatform} />
        )}
        {album?.description !== "" && (
          <StyledParagraph>{album?.description}</StyledParagraph>
        )}
      </StyledContainer>

      {songs && songs.length > 0 && <SongListTable songs={songs} />}
      <br />
      <Link to="/">もどる</Link>
    </article>
  );
};
