import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { dataRemerciement } from "../data/Data";
import Header from "../components/header/Header";

const dataCardFormat = dataRemerciement.map((e, index) => (
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

function supporters() {
  return (
    <div>
      <Header />
      <Grid container mt={5}>
        <Grid item xs={false} sm={false} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography fontWeight={700} fontSize={25} fontFamily={"Montserrat"}>
            Supporters
          </Typography>
          <Typography
            // fontWeight={"bold"}
            fontSize={14}
            fontFamily={"Montserrat"}
          >
            Code.org is sincerely grateful for our vibrant community of
            corporate, institutional, and individual donors. We acknowledge the
            following supporters who have made generous commitments of $1,000
            and above to support our 2023 fiscal year (January 1, 2023 -
            December 31, 2023).
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={18}
            mt={5}
            fontFamily={"Montserrat"}
            sx={{
              textDecoration: "underLine",
              color: "blue",
            }}
          >
            Tous les Supporters
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
