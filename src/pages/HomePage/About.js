import { Grid, Typography } from "@mui/material";
import React from "react";
import imageabout from "../../images/SecendDayWishitonMurch2024PresentialyInGoma3.jpg";

function About() {
  return (
    <div
      style={{
        margin: 100,
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
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 25,
            }}
          >
            About Us
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
