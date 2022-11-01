import React from "react";
import styled from "styled-components";

const Container = styled.div({});

type Props = {
  description: string;
};

const Description: React.FC<Props> = ({ description }) => {
  return (
    <Container>
      <p>{description}</p>
    </Container>
  );
};

export default Description;
