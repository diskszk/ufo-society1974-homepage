import React from "react";
import { Content } from "./styles";
import CustomButton from "../CustomButton";

const ErrorModalContent = () => {
  return (
    <Content>
      <h3>{`fooエラーのためバツバツです。\n再度挑戦願う。`}</h3>
      <br />
      <CustomButton
        label="とじる"
        handleClick={() => {
          alert("閉じます");
        }}
      />
    </Content>
  );
};

export default ErrorModalContent;
