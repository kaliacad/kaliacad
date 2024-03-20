import React from "react";
// import HomeAcc from "./HomeTitle";
// import HomaCenter from "./HomaCenter";
// import Mission from "./HomMission";
import Homeaf from "./HomeaWatWeDo";
import FooterFin from "./HomeFooter";
import About from "./About";
import WeDo from "./WeDo";
import History from "./History";
import ConnectWith from "./ConnectWith";
import JoinGroup from "./JoinGroup";

function HomeGolobal() {
  return (
    <div>
      {/*
        <HomeAcc />
         <HomaCenter />
           <Mission />
        */}
      <About />
      <WeDo />
      <History />

      <Homeaf />
      <ConnectWith />
      <JoinGroup />
      <FooterFin />
    </div>
  );
}

export default HomeGolobal;
