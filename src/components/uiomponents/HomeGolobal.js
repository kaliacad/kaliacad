import React from "react";
import Homeaf from "./HomeaWatWeDo";
import FooterFin from "../footer/HomeFooter";
import About from "./About";
import WeDo from "./WeDo";
import Header from "../header/Header";

function HomeGolobal() {
  return (
    <div>
      <Header />
      <About />
      <WeDo />
      <Homeaf />
      <FooterFin />
    </div>
  );
}

export default HomeGolobal;
