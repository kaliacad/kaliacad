import { AppBar, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import BlogMenu from "./blogs/blogMenu";
import BlogMenuRith from "./blogs/blogMenuRith";
import BlogMenuLefst from "./blogs/blogMenuLefst";
import FooterFin from "./HomePage/HomeFooter";
import ITextFieldnput from "../controlers/TextFieldInput";
import { Google } from "@mui/icons-material";
// import AdbIcon from "@mui/icons-material/Adb";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
// import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [seach, setSeach] = React.useState("");
  // const nav = useNavigate();

  return (
    <div
      style={{
        bgcolor: "#f0f0f0",
        marginTop: 80,
      }}
    >
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
      <Grid
        container
        flexDirection={"row"}
        sx={{
          bgcolor: "#f0f0f0",
          minHeight: "100%",
        }}
      >
        <Grid item xs={0} sm={0} md={2} lg={2} xl={2}>
          <BlogMenuLefst />
        </Grid>
        <Grid item xs={0} sm={0} md={7} lg={7} xl={7}>
          <BlogMenu search={seach} />
        </Grid>
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          <BlogMenuRith />
        </Grid>
      </Grid>
      <FooterFin />
    </div>
  );
}
