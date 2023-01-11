import { CustomButton, CustomSpan } from "./styles";

type Props = {
  label: string;
  handleClick: () => void;
};

export const Button: React.FC<Props> = ({ label, handleClick }) => {
  return (
    <CustomButton onClick={handleClick}>
      <CustomSpan>{label}</CustomSpan>
    </CustomButton>
  );
};
