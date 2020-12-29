import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Modal, Content } from "./styles";

const LoadingModalContent = () => {
  return (
    <Content>
      <CircularProgress disableShrink size={80} />
      <p>Loading...</p>
    </Content>
  );
};

export default LoadingModalContent;
