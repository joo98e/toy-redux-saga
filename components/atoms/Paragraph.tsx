import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  desc?: boolean;
  children: any;
}

const Span = styled.span<Props>`
  font-size: 1rem;

  ${(props) =>
    props.desc &&
    css`
      font-size: 0.7rem;
      color: var(--main-text-desc);
    `}
`;

const Paragraph = ({ desc, children }: Props) => {
  return <Span desc={desc}>{children}</Span>;
};

export default Paragraph;
