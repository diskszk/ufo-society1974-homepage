import style from "styled-components";

// 画面全体を覆う設定
export const Container = style.div({
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

export const Modal = style.div({
  position: "absolute",
  top: "30%",
  marginBottom: "48px",
  width: "88%",
  padding: "16px",
  backgroundColor: "#eee",
  minHeight: "240px",
  borderRadius: "16px",
});

export const Content = style.div({
  margin: "52px 0",
  whiteSpace: "pre-wrap",
});

export const LyricNote = style.div({
  whiteSpace: "pre-wrap",
  backgroundColor: "green",
  textAlign: "left",
});
