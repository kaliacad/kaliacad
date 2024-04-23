import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { supporters } from "../../data/Data";
import { Link } from "gatsby";

function ThankYou() {
  const supportersList = supporters.map(
    (supporter, index) =>
      supporter.name + (index < supporters.length - 1 ? " • " : "")
  );
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
          <Grid item width={"100%"} padding={5} justifyContent={"center"}>
            <Stack
              sx={{
                ml: 5,
                marginTop: -10,
              }}
            >
              <Typography
                fontFamily={"Montserrat"}
                textAlign={"center"}
                variant="h4"
                sx={{ mb: 3 }}
              >
                Kali Academy remercie
              </Typography>
            </Stack>
            <Typography sx={{ mb: 3, textAlign: "center " }}>
              {supportersList}
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/supporters">Voir tous nos supporteurs</Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThankYou;
