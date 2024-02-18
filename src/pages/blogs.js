import { AppBar, Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import BlogMenu from "./blogs/blogMenu";
import BlogMenuRith from "./blogs/blogMenuRith";
import BlogMenuLefst from "./blogs/blogMenuLefst";
import FooterFin from "./HomePage/HomeFooter";
import ITextFieldnput from "../controlers/TextFieldInput";
import { Google } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";

export default function Blogs() {
  const [seach, setSeach] = React.useState("");

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
              <AdbIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  mt: 0.3,
                  color: "blue",
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                // href="#app-bar-with-responsive-menu"
                sx={{
                  //   mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                KALI ACADEMY
              </Typography>
            </div>
          </Grid>
          <Grid item xs={0} sm={0} md={5} lg={5} xl={5}>
            <ITextFieldnput
              value={seach}
              onChange={(e) => setSeach(e.target.value)}
              placeholder={"Recherche..."}
            />
          </Grid>
          <Grid item xs={0} sm={0} md={3} lg={3} xl={3} ml={2} mt={-1.5}>
            <div
              style={{
                marginTop: 10,
                borderRadius: 100,
                width: "90%",
                background: "blue",
                display: "flex",
                "&:hover": {
                  backgroundColor: "#0d47a1",
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
