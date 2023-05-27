import { ButtonLinkContainer } from "./styles";
import { ButtonProps } from "@/types/buttonProps";

export function ButtonLink({ children }: ButtonProps) {
  return <ButtonLinkContainer href={""}>{children}</ButtonLinkContainer>;
}
