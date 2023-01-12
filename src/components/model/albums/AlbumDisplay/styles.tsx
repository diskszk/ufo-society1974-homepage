import styled from "styled-components";
import { MIN_WIDTH } from "../../../../constants";

export const StyledContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  color: #eee;

  @media (min-width: ${MIN_WIDTH}) {
    width: 300px;
  }
`;
export const StyledImage = styled.img`
  width: 100%;

  @media (min-width: ${MIN_WIDTH}) {
    width: 300px;
  }
`;

export const StyledParagraph = styled.p({
  backgroundColor: "rgba(238, 238, 238, .9)",
  textAlign: "left",
  padding: 8,
  borderRadius: "4px",
});
