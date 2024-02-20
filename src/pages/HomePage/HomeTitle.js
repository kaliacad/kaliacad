import { Grid, Typography } from "@mui/material";
import React from "react";

function HomeAcc() {
  return (
    <div style={{ background: "green" }}>
      <Grid
        container
        height={480}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          bgcolor: "#00889A",
        }}
      >
        <Grid item xs={12} sm={12} xl={12} md={12} lg={12}>
          <Typography
            variant="h4"
            textAlign={"center"}
            color={"#fff"}
            fontWeight={"bold"}
          >
            CATALYSEUR DE LA CONTRIBUTION OPEN SOURCE
          </Typography>
          <Typography variant="h6" textAlign={"center"} color={"#fff"}>
            changer le monde grâce au code
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeAcc;
