import { styled } from "@/styles";

export const Button = styled("button", {
  backgroundColor: "$orange700",
  padding: "1rem 3.5rem",
  borderRadius: "8px",
  transition: "ease-in-out 200ms ",
  cursor: "pointer",
  "&:disabled":{
    background:"$gray300",
    cursor:"not-allowed"
  },
  "&::not(disabled):hover": {
    background: "$orange300",
    "box-shadow": "0px 0px 50px rgba(245, 86, 43, 0.37)",
  },
  border: "none",
  fontWeight: 700,
  color: "$white",
  fontSize: "1.25rem",
  variants: {
    sizeButton: {
      full: {
        width: "100%",
      },
    },
  },
  "@media (max-width:600px)": {
    padding: "1rem 0",
    width: "100%",
    fontSize: "1rem",
  },
  "@media (max-width:280px)": {
    padding: ".8rem 0",
    width: "100%",
    fontSize: ".8rem",
  },
});
