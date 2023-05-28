import { ButtonProps } from "@/types/buttonProps";
import { ButtonContainer } from "./styles";

export function Button({ children }: ButtonProps) {
  return <ButtonContainer> {children}</ButtonContainer>;
}
