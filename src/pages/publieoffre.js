import React from "react";
import Header from "../components/header/Header";
import TitleHeader from "../components/titleheader";

function PublieOfre() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "5.6%" }}>
        <TitleHeader
          title={"Publication de l'offre"}
          desicription={
            "Vous êtes bien au point de piblier l'offre d'emploi. Cette offre sera visible à tout le monde."
          }
        />
      </div>
    </div>
  );
}

export default PublieOfre;
