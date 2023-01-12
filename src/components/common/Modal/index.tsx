import { ReactNode } from "react";
import { StyledContainer, StyledModal } from "./styles";
import { LoadingModalContent } from "./LoadingModalContent";
import { ErrorModalContent } from "./ErrorModalContent";
import { LyricNoteContent } from "./LyricNoteContent";
import { useSelector } from "react-redux";
import { RootStore, ModalStatus } from "../../../types";

type ComponentProps = {
  children: ReactNode;
};
export const Component: React.FC<ComponentProps> = ({ children }) => (
  <StyledContainer>
    <StyledModal>{children}</StyledModal>
  </StyledContainer>
);

// ErrorMessage / LyricNote / Loading...
export const ModalWrapper: React.FC = () => {
  const { modalType } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  if (modalType === "ERROR") {
    return (
      <Component>
        <ErrorModalContent />
      </Component>
    );
  } else if (modalType === "LOADING") {
    return (
      <Component>
        <LoadingModalContent />
      </Component>
    );
  } else if (modalType === "LYRIC_NOTE") {
    return (
      <Component>
        <LyricNoteContent />
      </Component>
    );
  } else {
    throw new Error();
  }
};
