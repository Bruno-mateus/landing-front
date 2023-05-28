import { styled } from "@/styles";

export const HighLightContainer = styled("div", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  TextAlign: "center",
  variants: {
    sizes: {
      large: {
        padding: "0 5.84rem",
        gap: "1.5rem",
        fontSize: "1.125rem",
        h1: {
          fontSize: "4rem",
          lineHeight: "5.2rem",
          fontWeight: 700,
          span: {
            display: "inline-flex",
            flexDirection: "column",
            span: {
              width: "100%",
              height: 3,
              backgroundColor: "$orange700",
              borderRadius: "8px",
            },
          },
        },
      },
      medium: {
        fontSize: "1.125rem",
        gap: "1rem",
        p: {
          maxWidth: 545,
          lineHeight: "1.6875rem",
          margin: "auto",
        },
        h2: {
          fontSize: "3rem",
        },
      },
      small: {
        lineHeight: "1.5rem",
        gap: ".5rem",
        p: {
          fontSize: "1rem",
        },
      },
    },
  },
});
