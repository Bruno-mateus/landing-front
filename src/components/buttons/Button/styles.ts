import { styled } from "@/styles";

export const ButtonContainer = styled("button", {
  backgroundColor: "$orange700",
  padding: "1rem 3.5rem",
  borderRadius: "8px",
  transition: "ease-in-out 200ms ",
  cursor: "pointer",
  "&:hover": {
    background: "$orange300",
    "box-shadow": "0px 0px 50px rgba(245, 86, 43, 0.37)",
  },
  border: "none",
  fontWeight: 700,
  color: "$white",
  fontSize: "1.25rem",
  "@media (max-width:500px)": {
    padding: "1rem 0",
    width: "100%",
    fontSize: "1rem",
  },
});
