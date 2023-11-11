import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import "@fontsource/saira-stencil-one";
import "@fontsource-variable/montserrat";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <div />
    </ThemeProvider>
  </React.StrictMode>,
);
