import { Grid, Typography } from "@mui/material";
import React from "react";
import imageabout from "../../images/aboutus-kali.jpg";

function About() {
  return (
    <div>
      <Grid
        container
        display={{
          xs: "none",
          md: "flex",
          sm: "none",
          lg: "flex",
          xl: "flex",
        }}
      >
        <div
          style={{
            margin: 100,
            marginBottom: 0,
          }}
        >
          <Grid container flexDirection={"row"}>
            <Grid item xs={"none"} sm={"none"} md={6} lg={6} xl={6}>
              <img
                src={imageabout}
                alt="Kali academy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block" /* Supprime l'espace réservé sous l'image */,
                  margin: "0 auto",
                  objectFit: "cover",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </Grid>
            <Grid item xs={"none"} sm={"none"} md={5} lg={5} xl={5} ml={5}>
              <Typography variant="h3">A propos de nous</Typography>
              <Typography variant="body1">
                Kali Academy est une académie qui vise à promouvoir les valeurs
                de l'open source dans les régions les moins représentées
                notament en Afrique. Les valeurs clés de l'open source sont le
                partage, la collaboration et bien sûr aussi la contribution.
                Notre cible majeur est les étudiants ainsi que les récents
                diplômés. Mais nous n' oublions pas aussi toute la communauté
                qui doit être aussi sensibilisée sur l'open source.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
      {
        //affichage mobile
      }
      <Grid
        container
        display={{
          xs: "felx",
          md: "none",
          sm: "flex",
          lg: "none",
          xl: "none",
        }}
      >
        <div
          style={{
            margin: 10,
            marginBottom: 0,
          }}
        >
          <Grid container flexDirection={"row"}>
            <Grid item xs={"none"} sm={"none"} md={6} lg={6} xl={6}>
              <img
                src={imageabout}
                alt="Kali academy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block" /* Supprime l'espace réservé sous l'image */,
                  margin: "0 auto",
                  objectFit: "cover",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </Grid>
            <Grid item xs={"none"} sm={"none"} md={5} lg={5} xl={5}>
              <Typography variant="h3">A propos de nous</Typography>
              <Typography
                sx={{ mt: 1, fontSize: 16, fontFamily: "Montserrat" }}
              >
                Kali Academy est une académie qui vise à promouvoir les valeurs
                de l'open source dans les régions les moins représentées
                notament en Afrique. Les valeurs clés de l'open source sont le
                partage, la collaboration et bien sûr aussi la contribution.
                Notre cible majeur est les étudiants ainsi que les récents
                diplômés. Mais nous n' oublions pas aussi toute la communauté
                qui doit être aussi sensibilisée sur l'open source.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default About;
