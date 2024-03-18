import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import NavBarDrawer from "./NavBarDrawer";
import imagetitle from "../images/SecendDayWishitonMurch2024PresentialyInGoma3.jpg";
// import { Stack, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundImage: `url(${imagetitle})`,
        height: "38vh",
        objectFit: "cover",
      }}
    >
      <Toolbar disableGutters sx={{ width: "100%" }}>
        <NavBar />
      </Toolbar>
    </AppBar>
  );
}
export default Header;
