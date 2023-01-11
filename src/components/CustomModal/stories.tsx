/* eslint-disable import/no-default-export */

import { ComponentMeta } from "@storybook/react";
import { Component as ModalWrapper } from ".";
import { Component as ErrorModalContent } from "./ErrorModalContent";
import { Component as LyricNoteContent } from "./LyricNoteContent";
import { LoadingModalContent } from "./LoadingModalContent";
import { mockSongs } from "../../mocks/mockData";
import { Song } from "../../types";

export default {
  title: "components/modals",
  component: ModalWrapper,
} as ComponentMeta<typeof ModalWrapper>;

export const ErrorModal = () => {
  return (
    <ModalWrapper>
      <ErrorModalContent
        errorMessage="404エラー"
        handleClickClose={() => void 0}
      />
    </ModalWrapper>
  );
};

export const LoadingModal = () => {
  return (
    <ModalWrapper>
      <LoadingModalContent />
    </ModalWrapper>
  );
};

export const LyricNote_ExistsSong = () => {
  return (
    <ModalWrapper>
      <LyricNoteContent song={mockSongs[0]} handleClose={() => void 0} />
    </ModalWrapper>
  );
};

export const LyricNote_NotExistsSong = () => {
  const song: Song = {
    ...mockSongs[0],
    songFile: {
      filename: "",
      path: "",
    },
  };

  return (
    <ModalWrapper>
      <LyricNoteContent song={song} handleClose={() => void 0} />
    </ModalWrapper>
  );
};
