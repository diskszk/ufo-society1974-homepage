import React from "react";
import { CustomButton, CustomSpan } from "./style";

type Props = {
  message: string;
  handleClick: () => void;
};

const Button: React.FC<Props> = ({ message, handleClick }) => {
  return (
    <CustomButton onClick={handleClick}>
      <CustomSpan>{message}</CustomSpan>
    </CustomButton>
  );
};

export default Button;
