import React, { useState } from "react";
import Homeaf from "./HomeaWatWeDo";
import FooterFin from "../footer/HomeFooter";
import About from "./About";
import WeDo from "./WeDo";
import Header from "../header/Header";
import ThankYou from "./ThankYou";
import Layout from "../../theme/layout";

import Skeletons from "../Loader";


function HomeGolobal() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false); // Mettre à jour l'état pour indiquer que les données sont chargées
      }, 3000); // Temps de chargement simulé (3 secondes)
    };

    fetchData();

    // Nettoyage de l'effet
    return () => clearTimeout(fetchData);
  }, []);
  return (
    <Layout>
      <Header />
      <About />
      <WeDo />
      <Homeaf />
      <ThankYou />
      <FooterFin />
      {loading === true ? (
        <Skeletons />
      ) : (
        <div>
          <Header />
          <About />
          <WeDo />
          <Homeaf />
          <ThankYou />
          <FooterFin />
        </div>
      )}
    </Layout>
  );
}

export default HomeGolobal;
