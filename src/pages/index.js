import * as React from "react";
import HomeGolobal from "../components/uiomponents/HomeGolobal";
import "typeface-montserrat";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/them";

const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat, Roboto, sans-serif, serif",
  marginLeft: -8,
  marginRight: -5,
  // merginTop: -25,
};

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={pageStyles}>
        <HomeGolobal />
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Kali Academy | Home</title>;
