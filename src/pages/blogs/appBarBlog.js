import React from "react";
import ITextFieldnput from "../../controlers/TextFieldInput";
import { Google } from "@mui/icons-material";
import kalibackground from "../../images/Kali_academy_-_Logo-gris.png";
import { AppBar, Button, Grid, Typography } from "@mui/material";
// import AdbIcon from "@mui/icons-material/Adb";

function AppBarBlog({ seach, setSeach, nav }) {
  return (
    <AppBar position="fixed" elevation={0} sx={{ background: "#fff" }}>
      <Grid container flexDirection={"row"} sx={{ bgcolor: "#fff" }} m={1}>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography mt={-2.5} onClick={() => nav("/")}>
              <img
                src={kalibackground}
                alt="Kali academy"
                style={{
                  width: "auto",
                  height: 80,
                  display: "block" /* Supprime l'espace réservé sous l'image */,
                  margin: "0 auto",
                  objectFit: "cover",
                }}
              />
            </Typography>
          </div>
        </Grid>
        <Grid item xs={0} sm={0} md={5} lg={5} xl={5} mt={1}>
          <ITextFieldnput
            value={seach}
            onChange={(e) => setSeach(e.target.value)}
            placeholder={"Recherche..."}
          />
        </Grid>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3} ml={2}>
          <div
            style={{
              marginTop: 5,
              borderRadius: 100,

              width: "80%",
              background: "#B3B2B2",
              display: "flex",
              "&:hover": {
                backgroundColor: "#B3B2B2",
              },
            }}
          >
            <Google
              sx={{
                color: "#fff",
                // mt:1,
                fontSize: 35,
              }}
            />
            <Button
              sx={{
                color: "#fff",
                // ml: 2,
              }}
            >
              Continuer avec Google
            </Button>
          </div>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default AppBarBlog;
