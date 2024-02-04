import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { primary, secondary, complement, title, text, textBlack } from "./styles/Palette.jsx";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    complement: {
      main: complement,
    },
    text: {
      main: text,
      secondary: textBlack,
    },
    title: {
      main: title,
    }
  },
  typography: {
    allVariants: {
      textWrap: "balance",
    },
    body1: {
      textWrap: "pretty",
    },
    body2: {
      textWrap: "pretty",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
