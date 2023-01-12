import { CircularProgress } from "@mui/material";
import { Content } from "./styles";

export const LoadingModalContent: React.FC = () => {
  return (
    <Content>
      <CircularProgress disableShrink size={80} />
      <p>Loading...</p>
    </Content>
  );
};
