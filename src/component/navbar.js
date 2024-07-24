import { AppBar, Button, Grid, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import React from "react";
import ITextFieldnput from "../controlers/TextFieldInput";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";

export default function Navbar() {
  const [seach, setSeach] = React.useState("");
  return (
    <AppBar position="fixed" elevation={0} sx={{ background: "#fff" }}>
      <Grid container flexDirection={"row"} sx={{ bgcolor: "#fff" }} m={1}>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              // onClick={() => nav("/")}
              // href="#app-bar-with-responsive-menu"
              sx={{
                //   mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "blue",
                textDecoration: "none",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={kalibackground}
                alt="Kali academy"
                style={{
                  width: 250,
                  height: 80,
                  marginTop: -15,
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
              marginTop: 10,
              borderRadius: 100,
              width: "90%",
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
                ml: 2,
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
