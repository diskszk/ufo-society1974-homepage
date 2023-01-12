import { PageHeader } from "./styles";
import { fetchAlbums } from "../lib";
import { useFetch } from "../hooks/useFetch";
import { AlbumList } from "../components/model/albums/AlbumList";

export const AlbumListPage: React.FC = () => {
  const { data: albums } = useFetch(["albums"], fetchAlbums);

  return (
    <article>
      <PageHeader>UFO societyの楽曲</PageHeader>
      {albums && <AlbumList albums={albums} />}
      <br />
    </article>
  );
};
