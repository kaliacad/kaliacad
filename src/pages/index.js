import * as React from "react";
import HomeGolobal from "../components/uiomponents/HomeGolobal";
import "typeface-montserrat";

const pageStyles = {
  color: "#232129",
  fontFamily: "Montserrat, Roboto, sans-serif, serif",
  marginLeft: -8,
  marginRight: -5,
};

const IndexPage = () => {
  return (
    <div style={pageStyles}>
      <HomeGolobal />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Kali Academy | Home</title>;
