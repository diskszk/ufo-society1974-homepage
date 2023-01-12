import { Link, useLocation } from "react-router-dom";
import { StyledHeading } from "./styles";
import { fetchAlbum, fetchSongs } from "../lib";
import { useFetch } from "../hooks/useFetch";
import { SongListTable } from "../components/model/songs/SongListTable";
import { AlbumDisplay } from "../components/model/albums/AlbumDisplay";

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
      {album && <AlbumDisplay album={album} />}
      {songs && <SongListTable songs={songs} />}
      <br />
      <Link to="/">もどる</Link>
    </article>
  );
};
