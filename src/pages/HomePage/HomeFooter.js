import { Stack } from "@mui/material";
import React from "react";
// import AdbIcon from '@mui/icons-material/Adb';
import { GitHub, Email, Telegram, YouTube } from "@mui/icons-material";

function FooterFin({ bgcolo }) {
  const currentyear = new Date().getFullYear();
  return (
    <Stack
      sx={{
        bgcolor: bgcolo ? bgcolo : "",
      }}
      m={3}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <div>
        <span
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          @{currentyear} Kali Academy
        </span>
      </div>
      <div
        style={{
          // background: "red",
          width: "15%",
        }}
      >
        <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
          <span
            style={{
              color: "gray",
              fontSize: 12,
              marginRight: 5,
            }}
          >
            <GitHub
              fontSize="small"
              sx={{
                ":hover": {
                  color: "#000",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "gray",
              fontSize: 12,
            }}
          >
            <Email
              fontSize="small"
              sx={{
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "gray",
              fontSize: 12,
            }}
          >
            <Telegram
              fontSize="small"
              sx={{
                ":hover": {
                  color: "blue",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "gray",
              fontSize: 12,
            }}
          >
            <YouTube fontSize="small" />
          </span>
        </Stack>
      </div>
      <div>
        <Stack flexDirection={"row"}>
          <span
            style={{
              color: "gray",
              fontSize: 12,
              marginRight: 5,
              ":hover": {
                color: "blue",
              },
            }}
          >
            Conditions d'utilisation
          </span>
          <span
            style={{
              color: "gray",
              fontSize: 12,
            }}
          >
            politique de confidentialité
          </span>
        </Stack>
      </div>
    </Stack>
  );
}

export default FooterFin;
