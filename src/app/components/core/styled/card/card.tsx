import { ReactNode } from "react";
import { Container, Title, Content } from "./card.styled";

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
    <Content>{children}</Content>
  </Container>
);

export default Card;
