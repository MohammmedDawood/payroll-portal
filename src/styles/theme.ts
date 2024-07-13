import { createTheme, rem } from "@mantine/core";

export const theme: ReturnType<typeof createTheme> = createTheme({
  fontFamily: "Space Grotesk, sans-serif",
  colors: {
    // Add your color
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
    // or replace default theme color
    blue: [
      "#eef3ff",
      "#dee2f2",
      "#bdc2de",
      "#98a0ca",
      "#7a84ba",
      "#6672b0",
      "#5c68ac",
      "#4c5897",
      "#424e88",
      "#364379",
    ],

    emerald: [
      "#f0fdf5",
      "#dcfce8",
      "#bbf7d1",
      "#86efad",
      "#4ade80",
      "#22c55e",
      "#16a34a",
      "#15803c",
      "#166533",
      "#14532b",
      "#052e14",
    ],
  },

  primaryColor: "emerald",
  defaultRadius: "md",

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
