import { AlbumListItem } from "../components/AlbumListItem";
import style from "styled-components";
import { MIN_WIDTH } from "../constants";
import { PageHeader } from "./styles";

import { Album } from "../types";
import { fetchAlbums } from "../lib";
import { useFetch } from "../hooks/useFetch";

const Ul = style.ul`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;

  @media (min-width: ${MIN_WIDTH}) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const AlbumListPage: React.FC = () => {
  const { data: albums } = useFetch(["albums"], fetchAlbums);

  return (
    <article>
      <PageHeader>UFO societyの楽曲</PageHeader>
      <div>
        <Ul>
          {albums &&
            albums.map((album: Album, key) => {
              return <AlbumListItem album={album} key={key} />;
            })}
        </Ul>
      </div>
      <br />
    </article>
  );
};
