import { Grid, Typography } from "@mui/material";
import React from "react";
import imageHistorie from "../../images/firstDayWishitonMurch2024PresentialyInGoma8.jpg";

function History() {
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
          }}
        >
          <Grid container flexDirection={"row"}>
            <Grid item xs={"none"} sm={"none"} md={5} lg={5} xl={5} mr={5}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: 25,
                  fontFamily: "Montserrat",
                }}
              >
                Our History
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
            <Grid item xs={"none"} sm={"none"} md={6} lg={6} xl={6}>
              <img
                src={imageHistorie}
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
          </Grid>
        </div>
      </Grid>
      {
        //affichage mobile
      }
      <Grid
        container
        display={{
          xs: "flex",
          md: "none",
          sm: "flex",
          lg: "none",
          xl: "none",
        }}
      >
        <div
          style={{
            margin: 10,
          }}
        >
          <Grid container flexDirection={"row"}>
            <Grid md={6} lg={6} xl={6} mr={6}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: 25,
                  fontFamily: "Montserrat",
                }}
              >
                Our History
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
            <Grid item md={6} lg={6} xl={6}>
              <img
                src={imageHistorie}
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
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default History;
