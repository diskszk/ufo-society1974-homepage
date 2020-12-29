import React from "react";
import { Container, Modal } from "./styles";

// ErrorMessage / LyricNote / Loading...
const ModalWrapper: React.FC = ({ children }) => {
  return (
    <Container>
      <Modal>{children}</Modal>
    </Container>
  );
};

export default ModalWrapper;
