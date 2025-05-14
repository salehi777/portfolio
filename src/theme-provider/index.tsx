"use client";

import MuiGlobalStyles from "./global-styles";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const theme = createTheme({
  direction: "rtl",

  palette: {
    primary: {
      main: "#4a4dff",
    },
    secondary: {
      main: "#ffc4ba",
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiGlobalStyles />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
