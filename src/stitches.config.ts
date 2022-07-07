import { createStitches } from "@stitches/react";

export const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      dark: "#262001",
      green: "#6A7324",
      yellow: "#D9CB84",
      red: "#8C5C51",
    },
    fonts: {
      ubuntu: "Ubuntu, sans-serif",
    },
    space: {
      s: "1%",
      m: "2%",
      l: "3%",
      xl: "5%",
      xxl: "10%",
    },
    sizes: {
      s: ".45rem",
      m: "1rem",
      l: "1.5rem",
      xl: "2rem",
      xxl: "4rem",
    },
  },
});
