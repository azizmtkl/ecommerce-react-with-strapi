import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          bg: {
            main: "#F6F6F6",
          },
          bgFeatures: {
            main: "#ffffff",
          },

          favColor: {
            main: grey[300],
          },

          grey: {
            100: "#f6f6f6",
            200: "#ededed",
            300: "#e5e5e5",
            400: "#dcdcdc",
            500: "#d3d3d3",
            600: "#a9a9a9",
            700: "#7f7f7f",
            800: "#545454",
            900: "#2a2a2a",
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },
          bg: {
            main: "#323739",
          },
          bgFeatures: {
            main: "#2A2A2A",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },

          grey: {
            900: "#f6f6f6",
            800: "#ededed",
            700: "#e5e5e5",
            600: "#dcdcdc",
            500: "#d3d3d3",
            400: "#a9a9a9",
            300: "#7f7f7f",
            200: "#545454",
            100: "#2a2a2a",
          },
        }),
  },
});

const responsive = () => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode), responsive),
    [mode]
  );
  return [theme, colorMode];
};
