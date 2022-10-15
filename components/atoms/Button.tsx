import styled from "@emotion/styled";
import { css } from "@emotion/react";

type ButtonType = "primary" | "secondary" | "error";

const fill = {
  primary: {
    color: "#FFF",
    background: "#096dd9",
    hover: "#1890ff",
  },
  secondary: {
    color: "#FFF",
    background: "#595959",
    hover: "#6e6e6e",
  },
  error: {
    color: "#FFF",
    background: "#f5222d",
    hover: "#ff4d4f",
  },
};

const StyledButton = styled.button<Props>`
  margin: 0;
  border: 0;
  border-radius: 0.2rem;
  padding: 0.4rem 0.8rem;
  box-sizing: border-box;

  cursor: pointer;
  color: ${(props) => fill[props.buttonType].color};
  background: ${(props) => fill[props.buttonType].background};
  transition: background 0.1s;

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      text-decoration: line-through;
    `}

  ${(props) =>
    !props.disabled &&
    css`
      &:hover {
        background: ${fill[props.buttonType].hover};
      }
    `}
`;

interface Props {
  buttonType: ButtonType;
  onClick: () => any;
  children: any;
  disabled?: boolean;
}

const Button = ({ buttonType, onClick, children, disabled = false }: Props) => {
  return (
    <StyledButton disabled={disabled} buttonType={buttonType} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
