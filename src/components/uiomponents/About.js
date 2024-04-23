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
              <Typography variant="h2">A propos de nous</Typography>
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
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: 25,
                  fontFamily: "Montserrat",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{ mt: 1, fontSize: 16, fontFamily: "Montserrat" }}
              >
                Since our founding in 2012, Code2040 has built one of the
                largest communities of Black and Latinx technologists, leaders,
                and innovators in the tech industry. We’ve been the entry point
                into the industry for hundreds of Computer Science undergrads.
                We’ve worked alongside over 250 tech-driven organizations to
                advance the recruitment, retention, and advancement of Black and
                Latinx talent in tech. Today, we know the power to dismantle
                structural racism in tech lives in community. We create spaces
                to center and celebrate the imaginations, expertise, and
                experience of Black and Latinx people working in tech.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default About;
