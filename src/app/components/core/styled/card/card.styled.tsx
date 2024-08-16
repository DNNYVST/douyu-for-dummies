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

export const Title = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  ${smallFont}
  ${fontWeightSemiBold}

  button {
    margin-left: auto;
  }
`;
