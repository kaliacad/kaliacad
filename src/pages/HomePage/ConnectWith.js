import { Grid, Typography } from "@mui/material";
import React from "react";
import ITextFieldnput from "../../controlers/TextFieldInput";
import Butons from "../../controlers/Butons";

function ConnectWith() {
  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <Grid container flexDirection={"row"}>
        <Grid item xs={"none"} sm={"none"} md={5} lg={5} xl={5} mr={5}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: 25,
              fontFamily: "Montserrat",
            }}
          >
            Connect with Us
          </Typography>
          <Typography sx={{ mt: 1, fontSize: 16, fontFamily: "Montserrat" }}>
            Reach out and be part of the change. We’re here to collaborate and
            answer any questions.
          </Typography>
        </Grid>
        <Grid item xs={"none"} sm={"none"} md={6} lg={6} xl={6} mr={6}>
          <Grid container flexDirection={"row"}>
            <Grid item xs={5} md={5} lg={5} sm={5} mr={2}>
              <ITextFieldnput label={"First Name"} />
            </Grid>
            <Grid item xs={6} md={6} lg={6} sm={6}>
              <ITextFieldnput label={"Last Name"} />
            </Grid>
          </Grid>
          <ITextFieldnput label={"Email"} />
          <ITextFieldnput label={"Message"} multiline={true} />
          <Butons title={"Submit"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ConnectWith;
