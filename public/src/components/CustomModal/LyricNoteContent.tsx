import React, { useCallback } from "react";
import { Content, LyricNote } from "./styles";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, ModalStatus } from "../../types";
import { closeModal } from "../../store/ModalStatusReducer";
import styled from "styled-components";
import { MIN_WIDTH } from "../../constans";

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

const LyricNoteContent: React.FC = () => {
  const dispatch = useDispatch();
  const { song } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, []);
  return (
    <Content>
      <CustomH3>{song.title}</CustomH3>
      {song.songFile.filename !== "" && (
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
      <CustomButton label="とじる" handleClick={handleClose} />
    </Content>
  );
};

export default LyricNoteContent;
