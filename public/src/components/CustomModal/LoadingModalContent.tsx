import React from "react";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Modal, Content } from "./styles";
import { CreateCloseModalAction } from "../../store/ModalStatusReducer";

const LoadingModalContent = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(CreateCloseModalAction());
  };

  return (
    <Content>
      <CircularProgress disableShrink size={80} />
      <p>Loading...</p>
    </Content>
  );
};

export default LoadingModalContent;
