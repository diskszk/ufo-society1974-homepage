import { CircularProgress } from "@mui/material";
import { Content } from "./styles";

const LoadingModalContent = () => {
  return (
    <Content>
      <CircularProgress disableShrink size={80} />
      <p>Loading...</p>
    </Content>
  );
};

export default LoadingModalContent;
