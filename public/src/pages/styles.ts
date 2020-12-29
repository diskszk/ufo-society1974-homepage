import style from "styled-components";
import { MIN_WIDTH } from "../constans";

export const PageHeader = style.h1({
  fontSize: "2em",
});

export const Container = style.div`
  width: 70%;
  margin: 0 auto;
  color: #eee;

  @media(min-width: ${MIN_WIDTH}) {
    width: 300px;
  }
`;
export const AlbumImage = style.img`
  width: 100%;

  @media (min-width: ${MIN_WIDTH}) {
    width: 300px;
  }
`;

export const Discription = style.p({
  textAlign: "left",
});
