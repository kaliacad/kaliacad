import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./NavBar";
import imagetitles from "../../images/profile.jpg";
import { Grid } from "@mui/material";

function Header({ imagebg, title, subtitle }) {
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
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundImage: `url(${imagebg ? imagebg : imagetitles})`,
            height: "70vh",
            objectFit: "contain",
            // backgroundPosition: "center top", // Ajustez la position de l'image selon vos besoins
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            display: "flex",
            // opacity: 0.5,
            // width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
            }}
          >
            <NavBar imageback={imagebg} title={title} subtitle={subtitle} />
          </Toolbar>
        </AppBar>
      </Grid>
      {/* mobile*/}
      <Grid
        container
        display={{
          xs: "felx",
          md: "none",
          sm: "flex",
          lg: "none",
          xl: "none",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundImage: `url(${imagebg ? imagebg : imagetitles})`,
            height: "45vh",
            objectFit: "cover",
            // backgroundPosition: "center top",`` // Ajustez la position de l'image selon vos besoins
            backgroundSize: "cover",
            display: "flex",
            // opacity: 0.5,
            width: "100%",
          }}
        >
          <Toolbar
            disableGutters
            sx={{ width: "100%", position: "fixed", bottom: 0 }}
          >
            <NavBar imageback={imagebg} title={title} subtitle={subtitle} />
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
export default Header;
