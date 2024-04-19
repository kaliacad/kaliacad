import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { dataRemerciement } from "../../data/Data";
import useCarousel from "../carousel";
import { navigate } from "gatsby";

const dataCardFormat = dataRemerciement.slice(0, 6).map((e, index) => (
  <Card
    key={index}
    sx={{
      maxWidth: 250,
      ml: 5,
      // height: 245,
    }}
    elevation={0}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height={100}
        image={e.image}
        alt="green iguana"
        style={{
          objectFit: "contain",
        }}
      />

      <CardContent></CardContent>
    </CardActionArea>
  </Card>
));
function ThankYou() {
  const { sliderDataHorizontal } = useCarousel();

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
                marginTop: -10,
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={25}
                fontFamily={"Montserrat"}
                textAlign={"center"}
              >
                Kali Academy remercie tout ceux qui l'ont soutenu
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  mt: 5,
                }}
              ></Typography>
            </Stack>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {dataCardFormat}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textDecoration: "underLine",
                }}
                onClick={() => navigate("/supporters")}
              >
                Tous afficher
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThankYou;
