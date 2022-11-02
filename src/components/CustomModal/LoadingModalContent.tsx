import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Content } from "./styles";
import { CreateCloseModalAction } from "../../store/ModalStatusReducer";

const LoadingModalContent = () => {
  const dispatch = useDispatch();

  const _handleButton = () => {
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
