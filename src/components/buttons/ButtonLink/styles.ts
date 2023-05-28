import { styled } from "@/styles";
import Link from "next/link";

export const ButtonLinkContainer = styled(Link, {
  border: "1px solid",
  borderColor: "$gray600",
  padding: "12px 24px",
  borderRadius: 8,
  textDecoration: "none",
  color: "white",
  fontWeight: 700,
});
