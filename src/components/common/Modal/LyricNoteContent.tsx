import { useCallback } from "react";
import { StyledContent, StyledLyricNote } from "./styles";
import { Button } from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, ModalStatus, Song } from "../../../types";
import { CreateCloseModalAction } from "../../../store/ModalStatusReducer";
import styled from "styled-components";
import { MIN_WIDTH } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";
import { fetchSong } from "../../../lib";

const CustomH3 = styled.h3({
  marginBottom: 20,
});
const CopyRightArea = styled.div`
  text-align: left;
  padding-left: 12px;
  @media (min-width: ${MIN_WIDTH}) {
    padding-left: 20%;
  }
`;
const Spacer = styled.div({
  height: 16,
});

type ComponentProps = {
  song: Song;
  handleClose: () => void;
};

export const Component: React.FC<ComponentProps> = ({ song, handleClose }) => (
  <StyledContent>
    <CustomH3>{song.title}</CustomH3>
    {song.songFile.filename !== "" && (
      // 要テスト: storageの楽曲ファイルだけ削除されている場合
      <>
        <audio controls controlsList="nodownload" src={song.songFile.path} />
        <Spacer />
      </>
    )}
    <StyledLyricNote>
      <p className="lyric">{song.lyric}</p>
    </StyledLyricNote>
    <CopyRightArea>
      <p>{`Lyrics by    ${song.wordsRights}`}</p>
      <p>{`Composed by  ${song.musicRights}`}</p>
    </CopyRightArea>
    <Spacer />
    <Button label="とじる" handleClick={handleClose} />
  </StyledContent>
);

export const LyricNoteContent: React.FC = () => {
  const dispatch = useDispatch();
  const { albumId, songId } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const { data: song } = useFetch<Song>(["song", songId], () =>
    fetchSong(albumId, songId)
  );

  const handleClose = useCallback(() => {
    dispatch(CreateCloseModalAction());
  }, [dispatch]);

  return <>{song && <Component song={song} handleClose={handleClose} />}</>;
};
