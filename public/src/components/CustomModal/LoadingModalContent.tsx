import React from "react";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Modal, Content } from "./styles";
import { closeModal } from "../../store/ModalStatusReducer";

const LoadingModalContent = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(closeModal());
  };

  return (
    <Content>
      <CircularProgress disableShrink size={80} />
      <p>Loading...</p>
    </Content>
  );
};

export default LoadingModalContent;
