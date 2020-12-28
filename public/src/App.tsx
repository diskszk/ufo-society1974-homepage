import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Routes from "./Routes";
import styled from "styled-components";

const Header = styled.header({
  marginTop: "16px",
});

const App: React.FC<{}> = () => {
  return (
    <>
      {/* モーダル */}
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
