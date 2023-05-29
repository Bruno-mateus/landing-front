import { LinkProps } from "next/link";
import { ReactNode } from "react";




export interface ButtonLinkProps extends LinkProps {
  children?: ReactNode;
  target?: string;
}
