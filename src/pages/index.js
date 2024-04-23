import * as React from "react";
import HomeGolobal from "../components/uiomponents/HomeGolobal";
import "typeface-montserrat";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/them";

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeGolobal />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Kali Academy | Home</title>;
