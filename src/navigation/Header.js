import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import NavBarDrawer from "./NavBarDrawer";
import imagetitle from "../images/profile.jpg";
// import { Stack, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundImage: `url(${imagetitle})`,
        height: "52vh",
        objectFit: "cover",
        // opacity: 0.5,
      }}
    >
      <Toolbar disableGutters sx={{ width: "100%" }}>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
