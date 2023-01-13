import styled from "styled-components";
import { MIN_WIDTH } from "../../../../constants";

export const StyledSubHeading = styled.h3({
  marginBottom: 20,
});
export const StyledCopyRightArea = styled.div`
  text-align: left;
  padding-left: 12px;
  @media (min-width: ${MIN_WIDTH}) {
    padding-left: 20%;
  }
`;
export const StyledSpace = styled.div({
  height: 16,
});
