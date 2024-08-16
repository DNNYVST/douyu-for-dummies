import styled, {css} from "styled-components";
import { disabled, smallFont, fontWeightMedium } from "../styles";

export const Container = styled.div<{ ({ props }) }>`
  ${smallFont}
  ${(props) => css`
    color: ${props.theme.text};
  `}
`;

export const Label = styled.label`
  display: block;
  ${fontWeightMedium}
`;

export const Input = styled.input`
  background: inherit;

  border: 1px solid black;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;

  &:focus {
    outline: none;
    border-color: #9147ff;
  }

  ${disabled}
`;
