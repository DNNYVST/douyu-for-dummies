import { ReactNode } from "react";
import { Container, Title, Content } from "./card.styled";

const Card = ({
  title = "",
  titleColor = "",
  children,
  button = null,
  contentId = "",
}: {
  title?: string;
  titleColor?: string;
  children: ReactNode;
  button?: ReactNode;
  contentId?: string;
}) => (
  <Container>
    {title && (
      <Title $color={titleColor}>
        {title}
        {button}
      </Title>
    )}
    <Content id={contentId}>{children}</Content>
  </Container>
);

export default Card;
