import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { supporters as supportersList } from "../data/Data";
import Header from "../components/header/Header";

const dataCardFormat = supportersList.map((supporter, index) => (
  <Card
    key={index}
    sx={{
      maxWidth: 250,
      ml: 5,
    }}
    elevation={0}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height={100}
        image={supporter.logo}
        alt=""
        style={{
          objectFit: "contain",
        }}
      />

      <CardContent></CardContent>
    </CardActionArea>
  </Card>
));

function supporters() {
  return (
    <div>
      <Header />
      <Grid container mt={5}>
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography variant="h3" fontFamily={"Montserrat"}>
            Nos Supporteurs
          </Typography>
         
         
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {dataCardFormat}
          </div>
        </Grid>
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </div>
  );
}

export default supporters;
