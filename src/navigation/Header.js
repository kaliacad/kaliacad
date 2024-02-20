import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { pages } from "../data/Data";
import { useNavigate } from "react-router-dom";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const nav = useNavigate();

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  const gotHomeTitleMenu = (e) => {
    if (e === 1) {
      nav("/");
    } else if (e === 3) {
      nav("/blogs");
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        background: "#FFF",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => nav("/")}
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "blue",
              textDecoration: "none",
              ":hover": {
                cursor: "pointer",
              },
            }}
            // onClick={()=>goHome()}
          >
            <img
              src={kalibackground}
              alt="Kali academy"
              style={{
                width: 250,
                height: 80,
              }}
              onClick={() => nav("/")}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "blue" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                background: "red",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => gotHomeTitleMenu(page.id)}
                  // id={page.id}
                  style={{
                    color: "#000",
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{
                  my: 2,
                  color: "#000",
                  display: "block",
                  fontWeight: "bold",
                }}
                onClick={() => gotHomeTitleMenu(page.id)}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/*
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 
              // onClick={handleOpenUserMenu}
               sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../images/icon.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
