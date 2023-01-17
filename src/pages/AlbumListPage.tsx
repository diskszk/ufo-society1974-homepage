import { StyledHeading } from "./styles";
import { fetchAlbums } from "../lib";
import { useFetch } from "../hooks/useFetch";
import { AlbumList } from "../components/model/albums/AlbumList";
import { ALT_IMAGE_PATH } from "../constants";

export const AlbumListPage: React.FC = () => {
  const { data } = useFetch(["albums"], fetchAlbums);

  const albums = data?.map((album) => {
    if (
      !album.imageFile ||
      !album.imageFile.filename ||
      !album.imageFile.path
    ) {
      return {
        ...album,
        imageFile: {
          filename: `no_image${album.id}`,
          path: ALT_IMAGE_PATH,
        },
      };
    }
    return album;
  });

  return (
    <article>
      <StyledHeading>UFO societyの楽曲</StyledHeading>
      {albums && <AlbumList albums={albums} />}
      <br />
    </article>
  );
};
