import React, { useCallback } from "react";
import { Content } from "./styles";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { ModalStatus, RootStore } from "../../types";
import { CreateCloseModalAction } from "../../store/ModalStatusReducer";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

interface Props extends RouteComponentProps<{}> {}

const ErrorModalContent: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector<RootStore, ModalStatus>(
    (state) => state.modalStatus
  );

  const handleClickClose = useCallback(() => {
    dispatch(CreateCloseModalAction());
    history.goBack();
  }, []);

  return (
    <Content>
      <h3>{errorMessage}</h3>
      <br />
      <CustomButton label="とじる" handleClick={handleClickClose} />
    </Content>
  );
};

export default withRouter(ErrorModalContent);
