import { useCallback } from "react";
import { Content } from "./styles";
import { Button } from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { ModalStatus, RootStore } from "../../types";
import { CreateCloseModalAction } from "../../store/ModalStatusReducer";
import { useNavigate } from "react-router-dom";

type ComponentProps = {
  errorMessage: string;
  handleClickClose: () => void;
};

export const Component: React.FC<ComponentProps> = ({
  handleClickClose,
  errorMessage,
}) => (
  <Content>
    <h3>{errorMessage}</h3>
    <br />
    <Button label="とじる" handleClick={handleClickClose} />
  </Content>
);

export const ErrorModalContent: React.FC = () => {
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
    <Component
      errorMessage={errorMessage}
      handleClickClose={handleClickClose}
    />
  );
};
