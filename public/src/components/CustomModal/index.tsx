import React from "react";
import { Container, Modal } from "./styles";
import LoadingModalContent from "./LoadingModalContent";
import ErrorModalContent from "./ErrorModalContent";
import LyricNoteContent from "./LyricNoteContent";
import { useSelector } from "react-redux";
import { RootStore, ModalStatus } from "../../types";

// ErrorMessage / LyricNote / Loading...
const ModalWrapper: React.FC = () => {
  const { modalType } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  return (
    <Container>
      <Modal>
        {modalType === "ERROR" && <ErrorModalContent />}
        {modalType === "LOADING" && <LoadingModalContent />}
        {modalType === "LYRIC_NOTE" && <LyricNoteContent />}
      </Modal>
    </Container>
  );
};

export default ModalWrapper;
