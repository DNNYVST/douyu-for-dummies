"use client";

import styled from "styled-components";
import Link from "next/link";
import { smallFont, fontWeightMedium } from "./components/core/styled/styles";

export const Main = styled.main`
  margin: 5% 5%;
  color: #efeff1;

  @media (min-width: 640px) {
    margin: 5% 20%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1%;
  ${smallFont}
  ${fontWeightMedium}
  text-decoration: underline;
  text-decoration-color: #9147ff;
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.25rem;

  &:hover {
    text-decoration-color: #772ce8;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;
