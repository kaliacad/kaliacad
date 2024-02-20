import {
  Card,
  Grid,
  Stack,
  Typography,
  CardActionArea,
  CardContent,
  Hidden,
} from "@mui/material";
import React from "react";
import { dataCequeNousFaison } from "../../data/Data";
import useCarousel from "../hooks/useCarousel";

const dataCardFormat = dataCequeNousFaison.map((e, index) => (
  <Card
    sx={{
      maxWidth: 345,
      ml: 1,
      height: 245,
    }}
    elevation={0}
  >
    <CardActionArea>
      {/*
        <CardMedia
        component="img"
        height="140"
        image={e.image}
        alt="green iguana"
        style={{
          objectFit: "cover",
        }}
      />
        */}

      <CardContent
        sx={{
          justifyContent: "center",
          alignContent: "center",
          mt: 7,
        }}
      >
        <Typography
          fontWeight={"bold"}
          gutterBottom
          variant="h6"
          component="div"
          textAlign={"center"}
        >
          {e.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {e.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
));

function Homeaf() {
  const { sliderdataverticale, sliderDataHorizontal } = useCarousel();
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        bgcolor={"#f0f0f0"}
        width={"100%"}
        padding={5}
        justifyContent={"center"}
      >
        <Stack>
          <Typography fontWeight={"bold"} fontSize={26} textAlign={"center"}>
            CE QUE NOUS FAISONS
          </Typography>
        </Stack>
        <div style={{ marginTop: 40 }}>
          <Hidden smDown xsDown>
            {sliderDataHorizontal({ dataslides: dataCardFormat })}
          </Hidden>
          <Hidden mdDown lgDown xlDown smUp xsUp>
            {sliderdataverticale({ dataslidesveriticale: dataCardFormat })}
          </Hidden>
        </div>
      </Grid>
    </Grid>
  );
}

export default Homeaf;
