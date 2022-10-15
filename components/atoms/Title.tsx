import styled from "@emotion/styled";

const Heading = styled.h1`
  font-size: 1.3rem;
`;

interface Props {
  children;
}

const Title = ({ children }: Props) => {
  return <Heading>{children}</Heading>;
};

export default Title;
