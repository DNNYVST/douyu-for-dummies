import { ReactNode } from "react";
import { Container, Title, Content } from "./card.styled";

const Card = ({
  title = "",
  titleColor = "",
  children,
  button = null,
}: {
  title?: string;
  titleColor?: string;
  children: ReactNode;
  button?: ReactNode;
}) => (
  <Container>
    {title && (
      <Title $color={titleColor}>
        {title}
        {button}
      </Title>
    )}
    <Content>{children}</Content>
  </Container>
);

export default Card;
