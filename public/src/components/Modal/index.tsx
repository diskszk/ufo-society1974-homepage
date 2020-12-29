import React from "react";
import { Container } from "./style";

// ErrorMessage / LyricNote / Loading...
const Modal: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Modal;
