import React from "react";
import TitleHeader from "../component/titleheader";
import EditorTextOfre from "./Drafts/editorTextOfre";
import Header from "../navigation/Header";

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
      <EditorTextOfre />
    </div>
  );
}

export default PublieOfre;
