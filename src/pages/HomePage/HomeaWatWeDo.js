import {
  Card,
  Grid,
  Stack,
  Typography,
  CardActionArea,
  CardContent,
  Hidden,
  CardMedia,
} from "@mui/material";
import React from "react";
import { dataCequeNousFaison } from "../../data/Data";
import useCarousel from "../hooks/useCarousel";

const dataCardFormat = dataCequeNousFaison.map((e, index) => (
  <Card
    sx={{
      maxWidth: 345,
      ml: 5,
      // height: 245,
    }}
    elevation={0}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image={e.image}
        alt="green iguana"
        style={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography
          fontWeight={"bold"}
          gutterBottom
          // variant="h6"
          component="div"
          // textAlign={"center"}
          fontFamily={"Montserrat"}
          fontSize={18}
        >
          {e.title}
        </Typography>
        <Typography
          fontFamily={"Montserrat"}
          variant="body2"
          color="text.secondary"
          // textAlign={"center"}
        >
          {e.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
));

function Homeaf() {
  const { sliderdataverticale, sliderDataHorizontal } = useCarousel();
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
        <Grid container justifyContent={"center"}>
          <Grid
            item
            // bgcolor={"#f0f0f0"}
            width={"100%"}
            padding={5}
            justifyContent={"center"}
          >
            <Stack
              sx={{
                ml: 5,
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={25}
                fontFamily={"Montserrat"}
              >
                Our Programs, Pillars, Partners
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  mt: 1,
                }}
              >
                Our programs are designed to uplift Black and Latinx talent,
                ensuring an equitable distribution of power in the tech world.
              </Typography>
            </Stack>
            <div style={{ marginTop: 20 }}>
              <Hidden smDown xsDown>
                {sliderDataHorizontal({ dataslides: dataCardFormat })}
              </Hidden>
            </div>
          </Grid>
        </Grid>
      </Grid>

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
        <Grid container m={2}>
          <Grid
            item
            // bgcolor={"#f0f0f0"}
            width={"100%"}
            // padding={5}
            // justifyContent={"center"}
          >
            <Stack
              sx={
                {
                  // ml: 5,
                }
              }
            >
              <Typography
                fontWeight={"bold"}
                fontSize={25}
                fontFamily={"Montserrat"}
              >
                Our Programs, Pillars, Partners
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  mt: 1,
                }}
              >
                Our programs are designed to uplift Black and Latinx talent,
                ensuring an equitable distribution of power in the tech world.
              </Typography>
              <div style={{ marginTop: 20, marginLeft: -35 }}>
                {sliderdataverticale({ dataslidesveriticale: dataCardFormat })}
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homeaf;
