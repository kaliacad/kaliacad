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
import useCarousel from "../carousel";

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
        <Typography variant="h6">{e.title}</Typography>
        <Typography variant="body2">{e.description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
));
const dataCardFormat2 = dataCequeNousFaison.map((e, index) => (
  <Card
    sx={{
      maxWidth: 345,
      // ml: 5,
      // height: 245,
      // marginBottom: 50,
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
        <Typography variant="h3">{e.title}</Typography>
        <Typography variant="body1">{e.description}</Typography>
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
                marginTop: -15,
              }}
            >
              <Typography variant="h2">Ce que nous faisons</Typography>
            </Stack>
            <div style={{ marginTop: 20 }}>
              <Hidden smDown xsDown>
                {sliderDataHorizontal({ dataslides: dataCardFormat })}
              </Hidden>
            </div>
          </Grid>
        </Grid>
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
              <Typography variant="h2">Ce que nous faisons</Typography>

              <div style={{ marginTop: 20 }}>
                {sliderdataverticale({ dataslidesveriticale: dataCardFormat2 })}
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homeaf;
