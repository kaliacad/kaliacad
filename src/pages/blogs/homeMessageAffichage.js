import { Google } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import imagebackground from "../../images/image.jpg";

function HomeMessage() {
  return (
    <div
      style={{
        backgroundImage: `url(${imagebackground})`,
        padding: 40,
        borderRadius: 10,
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: 25,
          color: "#fff",
          mt: 2,
        }}
      >
        Bienvenu sur Kali Academy
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: 18,
          mt: 3,
          // width:"60%"
          textAlign: "justify",
        }}
      >
        Ajoutez un compte pour accéder à toutes les fonctionnalités et interagir
        avec le contenu partagé par la communauté
      </Typography>
      <div
        style={{
          marginTop: 20,
          borderRadius: 100,
          width: "48%",
          background: "blue",
          display: "flex",
          "&:hover": {
            backgroundColor: "#0d47a1",
          },
        }}
      >
        <Google
          sx={{
            color: "#fff",
            // mt:1,
            fontSize: 35,
          }}
        />
        <Button
          sx={{
            color: "#fff",
            // ml: 2,
          }}
        >
          Continuer avec Google
        </Button>
      </div>
    </div>
  );
}

export default HomeMessage;
