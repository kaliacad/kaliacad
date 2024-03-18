import React from "react";
import HomeAcc from "./HomeTitle";
import HomaCenter from "./HomaCenter";
import Mission from "./HomMission";
import Homeaf from "./HomeaWatWeDo";
import FooterFin from "./HomeFooter";
import About from "./About";

function HomeGolobal() {
  return (
    <div>
      {/*
        <HomeAcc />
        */}
      <About />
      <HomaCenter />
      <Mission />
      <Homeaf />
      <FooterFin />
    </div>
  );
}

export default HomeGolobal;
