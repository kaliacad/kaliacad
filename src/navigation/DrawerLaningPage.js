import { navigate } from "gatsby";
import React from "react";
import Drawer from "@mui/material/Drawer";
import { pages } from "../data/Data";
import { Button, Divider } from "@mui/material";
import kalibackground from "../images/Kali_academy_-_Logo-gris-removebg-preview.png";

function DrawerLaningPage({ open, setOpen }) {
  //

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
    <Drawer
      variant="temporaire"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      open={open}
      onClose={setOpen}
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
          background: "none",
        }}
        onClick={() => navigate("/")}
      />
      <Divider />
      <div style={{ marginTop: 25 }}>
        {pages.map((page) => (
          <Button
            key={page.id}
            sx={{
              ml: 2,
              // m: 2,
              color: "#000",
              display: "block",
              fontWeight: "bold",
              fontFamily: "Montserrat",
              fontSize: 12,
              // background: "gray",
            }}
            onClick={() => gotHomeTitleMenu(page.id)}
          >
            {page.title}
          </Button>
        ))}
      </div>
    </Drawer>
  );
}

export default DrawerLaningPage;
