import styled, { css } from "styled-components";
import { smallFont, fontWeightSemiBold } from "../styles";

// border: 1px solid #48484b;
export const Container = styled.div`
  border-radius: 0.375rem;
  padding: 1rem;
  height: 100%;
  box-shadow: 0 10px 15px -3px black;

  background: #18181b;
  color: #efeff1;
`;

// ${smallFont}
// ${fontWeightSemiBold}
export const Title = styled.p<{ $color?: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  button {
    margin-left: auto;
  }
  ${(props) =>
    props.$color &&
    css`
      color: ${props.$color};
    `}
`;

export const Content = styled.div`
  overflow-x: scroll;
`;
