import styled from "styled-components";
import { MIN_WIDTH } from "../../constants";

// 画面全体を覆う設定
export const Container = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .6)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "auto",
});

export const Modal = styled.div({
  position: "absolute",
  top: "30%",
  marginBottom: "48px",
  width: "80%",
  padding: "16px",
  backgroundColor: "rgba(238, 238, 238, .9)",
  minHeight: "240px",
  borderRadius: "16px",
});

export const Content = styled.div({
  margin: "52px 0",
  whiteSpace: "pre-wrap",
});

export const LyricNote = styled.div`
  white-space: pre-wrap;
  text-align: left;
  
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  text-align: left;
  color: black;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 97%,
    #ddd 97%,
    #ddd 100%
  );
  background-size: 100% 1em;
  line-height: 2;
  background-color: #eee;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 8px;
  width: 88%;
  padding: 8px;

  @media (min-width: ${MIN_WIDTH}) {
    width: 60%;
    padding-left: 64px;
  }
`;
