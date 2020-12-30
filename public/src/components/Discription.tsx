import React from "react";
import styled from "styled-components";

const Container = styled.div({
});

type Props = {
  discription: string;
};

const Discription: React.FC<Props> = ({ discription }) => {
  return (
    <Container>
      <p>{discription}</p>
    </Container>
  );
};

export default Discription;
