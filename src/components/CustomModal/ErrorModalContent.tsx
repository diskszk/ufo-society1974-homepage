import React, { useCallback } from "react";
import { Content } from "./styles";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { ModalStatus, RootStore } from "../../types";
import { CreateCloseModalAction } from "../../store/ModalStatusReducer";
import { useNavigate } from "react-router-dom";

const ErrorModalContent: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const handleClickClose = useCallback(() => {
    dispatch(CreateCloseModalAction());

    // TODO: router使う必要なさそう
    navigate(-1);
  }, []);

  return (
    <Content>
      <h3>{errorMessage}</h3>
      <br />
      <CustomButton label="とじる" handleClick={handleClickClose} />
    </Content>
  );
};

export default ErrorModalContent;
