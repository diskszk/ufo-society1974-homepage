import React from "react";
import Router from "./Routes";
import styled from "styled-components";
import ModalWrapper from "./components/CustomModal";
import { useSelector } from "react-redux";
import { ModalStatus, RootStore } from "./types";

const Header = styled.header({
  marginTop: "16px",
});

const App: React.FC<{}> = () => {
  const modalStatus = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const topPageUrl =
    process.env.NODE_ENV !== "development"
      ? "https://diskszk.github.io/ufo-society1974/"
      : "/index.html";

  return (
    <>
      {/* モーダル */}
      {modalStatus.isOpen && <ModalWrapper />}
      <Header>
        <a href={topPageUrl}>トップページ</a>
      </Header>
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
