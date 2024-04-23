// Layout.js
import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./them";

const Layout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Layout;
