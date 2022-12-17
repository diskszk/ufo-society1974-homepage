import { ComponentMeta } from "@storybook/react";
import { Component as ModalWrapper } from ".";
import { Component as ErrorModalContent } from "./ErrorModalContent";
import { Component as LyricNoteContent } from "./LyricNoteContent";
import LoadingModalContent from "./LoadingModalContent";
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
  const song: Song = {
    id: "01",
    lyric: `
    ${"X".repeat(40)}
    ${"X".repeat(20)}
    ${"X".repeat(30)}
    ${"X".repeat(10)}
    `,
    songFile: {
      filename: "",
      path: "",
    },
    story: "XXXXXXXXXXXXXXXXXXXX",
    title: "kite",
    wordsRights: "XXX YYY",
    musicRights: "XXX YYY",
  };
  return (
    <ModalWrapper>
      <LyricNoteContent song={song} handleClose={() => void 0} />
    </ModalWrapper>
  );
};

export const LyricNote_NotExistsSong = () => {
  const song: Song = {
    id: "01",
    lyric: `
    ${"X".repeat(40)}
    ${"X".repeat(20)}
    ${"X".repeat(30)}
    ${"X".repeat(10)}
    `,
    songFile: {
      filename: "XXXXXX",
      path: "YYYYYYY",
    },
    story: "XXXXXXXXXXXXXXXXXXXX",
    title: "kite",
    wordsRights: "XXX YYY",
    musicRights: "XXX YYY",
  };
  return (
    <ModalWrapper>
      <LyricNoteContent song={song} handleClose={() => void 0} />
    </ModalWrapper>
  );
};
