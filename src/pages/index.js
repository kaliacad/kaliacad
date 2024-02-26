import * as React from "react";
import Header from "../navigation/Header";
import HomeGolobal from "./HomePage/HomeGolobal";

//
const pageStyles = {
  color: "#232129",
  // padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  marginLeft: -8,
  marginRight: -5,
};

const IndexPage = () => {
  document.title = "Kali Academy";
  return (
    <div
      style={{
        // background:"beige",
        width: "100%",
      }}
    >
      <Header />
      <main style={pageStyles}>
        <HomeGolobal />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
