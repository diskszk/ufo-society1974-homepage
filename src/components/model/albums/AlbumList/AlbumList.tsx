import { Album } from "../../../../types";
import { AlbumListItem } from "../AlbumListItem";
import { Ul } from "./styles";

type Props = {
  albums: Album[];
};

export const AlbumList: React.FC<Props> = ({ albums }) => {
  return (
    <Ul>
      {albums &&
        albums.map((album: Album, key) => {
          return <AlbumListItem album={album} key={key} />;
        })}
    </Ul>
  );
};
