import { ReactNode } from "react";
import { Container, Title } from "./card.styled";

const Card = ({
  title = "",
  children,
  button = null,
}: {
  title?: string;
  children: ReactNode;
  button?: ReactNode;
}) => (
  <Container>
    {title && (
      <Title>
        {title}
        {button}
      </Title>
    )}
    {children}
  </Container>
);

export default Card;
