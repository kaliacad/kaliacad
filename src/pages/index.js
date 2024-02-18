import * as React from "react";
import Header from "../navigation/Header";
import Route from "../router/indexs";
import { BrowserRouter } from "react-router-dom";
//
const pageStyles = {
  color: "#232129",
  // padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  document.title = "Kali Academy";
  return (
    <BrowserRouter>
      <div
        style={{
          // background:"beige",
          width: "100%",
        }}
      >
        <Header />
        <main style={pageStyles}>
          <Route />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
