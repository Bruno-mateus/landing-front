import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  html: {
    height: "100vh",
    scrollBehavior: "smooth",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    fontSize: "1.125rem",
    background: "$gray950",
    fontFamily: "var(--font-red-hat-display)",
    color: "$gray600",
    scrollBehavior: "smooth",
    
    height: "100%",
    "@media (max-width:500px)": {
      fontSize: "0.875rem",
    },
  },

  main: {
    height: "100%",
    width: "100%",
  },

  "h1,h2,h3,h4,h5,h6, strong": {
    color: "$white",
  },
});
