import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { pages } from "../data/Data";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import { navigate } from "gatsby";

function NavBar() {
  // const nav = useNavigate();

  const gotHomeTitleMenu = (e) => {
    if (e === 1) {
      navigate("/");
    } else if (e === 3) {
      navigate("/blog");
    } else if (e === 4) {
      navigate("/publieoffre");
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
        onClick={() => navigate("/")}
        mt={-1}
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
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
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
