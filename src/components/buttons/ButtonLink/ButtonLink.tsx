import { ButtonLinkProps } from "@/types/buttonProps";
import { ButtonLinkContainer } from "./styles";

export function ButtonLink({ children, target, ...rest }: ButtonLinkProps) {
  return (
    <ButtonLinkContainer {...rest} target={target}>
      {children}
    </ButtonLinkContainer>
  );
}
