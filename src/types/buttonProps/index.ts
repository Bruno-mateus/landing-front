import { LinkProps } from "next/link";
import { ReactNode } from "react";
import { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
}

export interface ButtonLinkProps extends LinkProps {
  children?: ReactNode;
  target?: string;
}
