import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { pages } from "../data/Data";
import { useNavigate } from "react-router-dom";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";

function NavBar() {
  const nav = useNavigate();

  const gotHomeTitleMenu = (e) => {
    if (e === 1) {
      nav("/");
    } else if (e === 3) {
      nav("/blogs");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "row",
        width: "100%",
      }}
    >
      <Typography
        onClick={() => nav("/")}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
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
          onClick={() => nav("/")}
        />
      </Typography>

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
    </div>
  );
}

export default NavBar;
