import { ButtonProps } from "@/types/buttonProps";
import { ButtonContainer } from "./styles";

export function Button({ children, type }: ButtonProps) {
  return <ButtonContainer type={type}> {children}</ButtonContainer>;
}
