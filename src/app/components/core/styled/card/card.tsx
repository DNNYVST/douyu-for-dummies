import { ReactNode, LegacyRef } from "react";
import { Container, Title, Content } from "./card.styled";

const Card = ({
  title = "",
  titleColor = "",
  children,
  button = null,
  contentRef,
}: {
  title?: string;
  titleColor?: string;
  children: ReactNode;
  button?: ReactNode;
  contentRef: LegacyRef<HTMLDivElement>;
}) => (
  <Container>
    {title && (
      <Title $color={titleColor}>
        {title}
        {button}
      </Title>
    )}
    <Content ref={contentRef}>{children}</Content>
  </Container>
);
export default Card;
