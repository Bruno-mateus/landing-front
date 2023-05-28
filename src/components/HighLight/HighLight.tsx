import { ReactNode } from "react";
import { HighLightContainer } from "./styles";

interface HighLightProps {
  children: ReactNode;
  size?: "large" | "small" | "medium";
}

export function HighLight({ children, size }: HighLightProps) {
  return <HighLightContainer sizes={size}>{children}</HighLightContainer>;
}
