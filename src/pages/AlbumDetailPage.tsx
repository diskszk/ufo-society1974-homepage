import { Link, useLocation } from "react-router-dom";
import { StyledHeading } from "./styles";
import { fetchAlbum } from "../lib";
import { useFetch } from "../hooks/useFetch";
import { SongListTable } from "../components/model/songs/SongListTable";
import { AlbumDisplay } from "../components/model/albums/AlbumDisplay";
import { useQuery } from "@tanstack/react-query";
import { Song } from "../types";
import { SongModal } from "../components/model/songs/SongModal";

export const AlbumDetailPage: React.FC = () => {
  const location = useLocation();
  const albumId = location.pathname.split("/")[2];

  const { data } = useFetch(["album", albumId], () => fetchAlbum(albumId));

  const { data: modalData } = useQuery<{ isOpen: boolean; song: Song | null }>(
    ["lyric-modal-data"],
    {
      enabled: false,
      initialData: { isOpen: false, song: null },
    }
  );

  return (
    <article className="space-bottom">
      {modalData.isOpen && modalData.song && (
        <SongModal song={modalData.song} />
      )}
      <StyledHeading>{data?.album.title}</StyledHeading>
      {data && <AlbumDisplay album={data.album} />}
      {data && <SongListTable albumInfo={data.info} />}
      <br />
      <Link to="/">もどる</Link>
    </article>
  );
};
