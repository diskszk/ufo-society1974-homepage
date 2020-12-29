import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Routes from "./Routes";
import styled from "styled-components";
import ModalWrapper from "./components/CustomModal";
import LoadingModalContent from "./components/CustomModal/LoadingModalContent";
import ErrorModalContent from "./components/CustomModal/ErrorModalContent";
import LyricNoteContent from "./components/CustomModal/LyricNoteContent";

import { useSelector } from "react-redux";
import { ModalStatus, RootStore } from "./types";

const Header = styled.header({
  marginTop: "16px",
});

const App: React.FC<{}> = () => {
  const modalStatus = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  return (
    <>
      {/* モーダル */}
      {modalStatus.isOpen && (
        <ModalWrapper>
          <LoadingModalContent />
        </ModalWrapper>
      )}
      <Header>
        <a href="/index.html">トップページ</a>
      </Header>
      <main>
        <Routes />
      </main>
    </>
  );
};

export default App;
