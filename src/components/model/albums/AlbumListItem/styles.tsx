import styled from "styled-components";
import { MIN_WIDTH } from "../../../../constants";

export const List = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 8px auto;

  @media (min-width: ${MIN_WIDTH}) {
    margin: "0px 16px 32px 16px";
  }
`;

export const Img = styled.img({
  width: "100%",
  margin: "0 auto",
});

export const Title = styled.p({
  color: "#fff",
  textAlign: "left",
  paddingTop: "4px",
  margin: 0,
});
