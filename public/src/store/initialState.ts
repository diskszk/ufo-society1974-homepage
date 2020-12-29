import { RootStore } from "../types";

export const initialState: RootStore = {
  loadingStatus: {
    isLoading: false,
    error: {
      isError: false,
      message: "",
    },
  },
  modalStatus: {
    isOpen: false,
    modalType: "",
    errorMessage: "",
    song: {
      id: "",
      lyric: "",
      songFile: {
        filename: "",
        path: "",
      },
      story: "",
      title: "",
      wordsRights: "",
      musicRights: "",
    },
  },
};
