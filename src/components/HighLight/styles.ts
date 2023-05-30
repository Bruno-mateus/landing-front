import { styled } from "@/styles";

export const HighLightContainer = styled("div", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  TextAlign: "center",
  alignItems: "center",
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
          "@media (max-width:600px)": {
            fontSize: "1.75rem",
            lineHeight: "2.25rem",
          },
          span: {
            display: "inline-flex",
            flexDirection: "column",
            span: {
              width: "100%",
              height: 3,
              backgroundColor: "$orange700",
              borderRadius: "8px",
              "@media (max-width:600px)": {
                display: "none",
              },
            },
          },
        },
        "@media (max-width:600px)": {
          padding: "0 1.25rem",
          width: "100%",
          gap: "1rem",
          fontSize: ".875rem",
        },
        "@media (max-width:280px)": {
          fontSize: "0.875rem",
          h1: {
            fontSize: "1.8rem",
          },
          padding: " 0 .8rem",
        },
      },
      medium: {
        fontSize: "1.125rem",
        gap: "1rem",
        h2: {
          fontSize: "3rem",
          "@media (max-width:600px)": {
            fontSize: "1.75rem",
          },
        },
        p: {
          maxWidth: 545,
          lineHeight: "1.6875rem",
          margin: "auto",
          "@media (max-width:600px)": {
            fontSize: "0.875rem",
          },
        },
        "@media (max-width:280px)": {
          fontSize: "0.875rem",
          h2: {
            fontSize: "1rem",
          },
          padding: "0 ",
          p: {
            innerWidth: "100%",
          },
        },
      },
      small: {
        lineHeight: "1.5rem",
        gap: ".5rem",
        p: {
          fontSize: "1rem",
        },
        "@media (max-width:280px)": {
          p: {
            fontSize: ".75rem",
          },
        },
      },
    },
  },
});
