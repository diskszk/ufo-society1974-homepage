import styled from "styled-components";

const Container = styled.div({});

type Props = {
  description: string;
};

export const Description: React.FC<Props> = ({ description }) => {
  return (
    <Container>
      <p>{description}</p>
    </Container>
  );
};
