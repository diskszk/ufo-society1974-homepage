import React, { useCallback } from "react";
import { Content, LyricNote } from "./styles";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStore, ModalStatus } from "../../types";
import { closeModal } from "../../store/ModalStatusReducer";

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
      <h3>{song.title}</h3>
      <LyricNote>
        <p>{song.lyric}</p>
      </LyricNote>
      <p>copyrights</p>
      <CustomButton label="とじる" handleClick={handleClose} />
    </Content>
  );
};

export default LyricNoteContent;
