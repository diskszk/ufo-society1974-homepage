import { useCallback } from "react";
import { Content, LyricNote } from "./styles";
import { Button } from "../../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, ModalStatus, Song } from "../../../types";
import { CreateCloseModalAction } from "../../../store/ModalStatusReducer";
import styled from "styled-components";
import { MIN_WIDTH } from "../../../constants";

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
  <Content>
    <CustomH3>{song.title}</CustomH3>
    {song.songFile.filename !== "" && (
      // 要テスト: storageの楽曲ファイルだけ削除されている場合
      <>
        <audio controls controlsList="nodownload" src={song.songFile.path} />
        <Spacer />
      </>
    )}
    <LyricNote>
      <p className="lyric">{song.lyric}</p>
    </LyricNote>
    <CopyRightArea>
      <p>{`Lyrics by    ${song.wordsRights}`}</p>
      <p>{`Composed by  ${song.musicRights}`}</p>
    </CopyRightArea>
    <Spacer />
    <Button label="とじる" handleClick={handleClose} />
  </Content>
);

export const LyricNoteContent: React.FC = () => {
  const dispatch = useDispatch();
  const { song } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const handleClose = useCallback(() => {
    dispatch(CreateCloseModalAction());
  }, []);

  return <Component song={song} handleClose={handleClose} />;
};
