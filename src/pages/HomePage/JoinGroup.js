import { Grid, Typography } from "@mui/material";
import React from "react";
import Butons from "../../controlers/Butons";
import ITextFieldnput from "../../controlers/TextFieldInput";

function JoinGroup() {
  return (
    <div
      style={{
        margin: 100,
        background: "#000",
        padding: 100,
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: 25,
          fontFamily: "Montserrat",
          color: "#fff",
          textAlign: "center",
        }}
      >
        To join the movement, You'll be the first to hear about the latest
        Code2040 updates, action items, articles, and opportunities.
      </Typography>
      <Typography
        sx={{
          mt: 1,
          fontSize: 16,
          fontFamily: "Montserrat",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Sign up with your email address to receive news and updates.
      </Typography>
      <Grid
        container
        flexDirection={"row"}
        sx={{
          mt: 5,
        }}
      >
        <Grid item xs={6} md={6} lg={6} sm={6} mr={2}>
          <ITextFieldnput label={"Email"} placeholder={"Email Adress"} />
        </Grid>
        <Grid item xs={5} md={5} lg={5} sm={5} mt={1.5}>
          <Butons title={"Submit"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default JoinGroup;
