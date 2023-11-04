import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme/Theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
