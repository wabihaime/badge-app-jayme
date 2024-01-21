"use client";

import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

interface ProvidersProps {
  children: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  },
});

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
