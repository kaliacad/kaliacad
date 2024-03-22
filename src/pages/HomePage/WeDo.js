import { Grid, Typography } from "@mui/material";
import React from "react";
import imageabout from "../../images/firstDayWishitonMurch2024PresentialyInGoma7.jpg";

function WeDo() {
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
            <Grid container>
              <Grid
                item
                md={12}
                lg={12}
                xl={12}
                sx={{
                  backgroundImage: `url(${imageabout})`,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  // p: 10,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: 50,
                    // textAlign: "center",
                    fontFamily: "Montserrat",
                  }}
                >
                  Why we do this
                </Typography>
                <Typography
                  sx={{
                    // textAlign: "center",
                    // mt: 1,
                    fontSize: 18,
                    fontFamily: "Montserrat",
                    //   fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Since our founding in 2012, Code2040 has built one of the
                  largest communities of Black and Latinx technologists,
                  leaders, and innovators in the tech industry. We’ve been the
                  entry point into the industry for hundreds of Computer Science
                  undergrads. We’ve worked alongside over 250 tech-driven
                  organizations to advance the recruitment, retention, and
                  advancement of Black and Latinx talent in tech. Today, we know
                  the power to dismantle structural racism in tech lives in
                  community. We create spaces to center and celebrate the
                  imaginations, expertise, and experience of Black and Latinx
                  people working in tech.
                </Typography>
              </Grid>
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
            marginBottom: 0,
            padding: 5,
          }}
        >
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
            <Grid container>
              <Grid
                item
                md={12}
                lg={12}
                xl={12}
                sx={{
                  backgroundImage: `url(${imageabout})`,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  // p: 10,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: 30,
                    // textAlign: "center",
                    fontFamily: "Montserrat",
                  }}
                >
                  Why we do this
                </Typography>
                <Typography
                  sx={{
                    // textAlign: "center",
                    // mt: 1,
                    fontSize: 18,
                    fontFamily: "Montserrat",
                    //   fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Since our founding in 2012, Code2040 has built one of the
                  largest communities of Black and Latinx technologists,
                  leaders, and innovators in the tech industry. We’ve been the
                  entry point into the industry for hundreds of Computer Science
                  undergrads. We’ve worked alongside over 250 tech-driven
                  organizations to advance the recruitment, retention, and
                  advancement of Black and Latinx talent in tech. Today, we know
                  the power to dismantle structural racism in tech lives in
                  community. We create spaces to center and celebrate the
                  imaginations, expertise, and experience of Black and Latinx
                  people working in tech.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default WeDo;
