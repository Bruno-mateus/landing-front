import { Avatar, Container } from "./styles";

interface CardProps {
  color: "blue" | "pink" | "orange" | "green";
}

export function Card({ color }: CardProps) {
  return (
    <Container backgrounds={color}>
      <Avatar backgrounds={color}></Avatar>
    </Container>
  );
}
