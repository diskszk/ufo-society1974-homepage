import React from "react";
import Routes from "./Routes";
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

  // const msg = process.env.Apple;

  return (
    <>
      {/* モーダル */}
      {modalStatus.isOpen && <ModalWrapper />}
      <Header>
        <a href="/index.html">トップページ</a>
        <p>msg</p>
      </Header>
      <main>
        <Routes />
      </main>
    </>
  );
};

export default App;
