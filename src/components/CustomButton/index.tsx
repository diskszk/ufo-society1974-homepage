import React from "react";
import { CustomButton, CustomSpan } from "./styles";

type Props = {
  label: string;
  handleClick: () => void;
};

const Button: React.FC<Props> = ({ label, handleClick }) => {
  return (
    <CustomButton onClick={handleClick}>
      <CustomSpan>{label}</CustomSpan>
    </CustomButton>
  );
};

export default Button;
