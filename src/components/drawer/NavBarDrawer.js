import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Drawer,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import React from "react";
import { pages } from "../../data/Data";
import { navigate } from "gatsby";

function NavBarDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const gotHomeTitleMenu = (e) => {
    if (e === 1) {
      navigate("/");
    } else if (e === 3) {
      navigate("/blogs");
    }
  };
  return (
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
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuOutlined sx={{ color: "#00889A" }} />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Menu
          sx={{
            display: { xs: "block", md: "none" },
            background: "red",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          <Typography mt={90}> ooook</Typography>
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
      </Drawer>
    </Box>
  );
}

export default NavBarDrawer;
