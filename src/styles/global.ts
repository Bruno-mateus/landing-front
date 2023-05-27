import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  "html, body": {
    width: "100vw",
    height: "100vh",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    scrollBehavior: "smooth",
    background: "$gray950",
    fontFamily: "var(--font-red-hat-display)",
    color: "$white",
  },
  "#_next": {
    width: "100%",
    height: "100%",
  },
});
