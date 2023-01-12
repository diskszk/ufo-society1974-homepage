import { StyledHeading } from "./styles";
import { fetchAlbums } from "../lib";
import { useFetch } from "../hooks/useFetch";
import { AlbumList } from "../components/model/albums/AlbumList";

export const AlbumListPage: React.FC = () => {
  const { data: albums } = useFetch(["albums"], fetchAlbums);

  return (
    <article>
      <StyledHeading>UFO societyの楽曲</StyledHeading>
      {albums && <AlbumList albums={albums} />}
      <br />
    </article>
  );
};
