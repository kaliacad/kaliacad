import React from "react";
import Homeaf from "./HomeaWatWeDo";
import FooterFin from "../footer/HomeFooter";
import About from "./About";
import WeDo from "./WeDo";
import Header from "../header/Header";
import ThankYou from "./ThankYou";
import Layout from "../../theme/layout";

function HomeGolobal() {
  return (
    <Layout>
      <Header />
      <About />
      <WeDo />
      <Homeaf />
      <ThankYou />
      <FooterFin />
    </Layout>
  );
}

export default HomeGolobal;
