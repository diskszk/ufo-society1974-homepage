import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header({
  marginTop: "16px",
});

export const Header: React.FC = () => {
  const topPageUrl =
    // process.env.NODE_ENV !== "development"
    // ?
    "https://diskszk.github.io/ufo-society1974/";
  // : "/index.html";

  return (
    <StyledHeader>
      <a href={topPageUrl}>トップページ</a>
    </StyledHeader>
  );
};
