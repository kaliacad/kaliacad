import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import NavBarDrawer from "./NavBarDrawer";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        background: "#FFF",
        display: "flex",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavBar />
          <NavBarDrawer />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
