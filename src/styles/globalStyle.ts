import { globalCss } from "../stitches.config";

export const globalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  body: {
    margin: "0",
    padding: "0",
    background: "$green",
    color: "$yellow",
    fontFamily: "$ubuntu",
  },
  a: {
    display: "block",
    color: "inherit",
    textDecoration: "none",
  },
  ul: {
    margin: "0",
    padding: "0",
    listStyleType: "none",
  },
});
