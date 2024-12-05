'use client'

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-montserrat)", // Default font
    h1: {
      fontFamily: "var(--font-chronicle-display)", // Use Chronicle Display for h1
      fontWeight: 700,
    },
    h2: {
      fontFamily: "var(--font-chronicle-display)", // Use Chronicle Display for h2
      fontWeight: 400,
    },
    body1: {
      fontFamily: "var(--font-montserrat)", // Montserrat for body text
    },
    button: {
      fontFamily: "var(--font-montserrat)", // Montserrat for buttons
      fontWeight: 600,
    },
  },
});

export default theme;
