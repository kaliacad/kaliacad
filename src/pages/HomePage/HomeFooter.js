import { Stack } from "@mui/material";
import React from "react";
// import AdbIcon from '@mui/icons-material/Adb';
import { GitHub, Email, Telegram, YouTube } from "@mui/icons-material";

function FooterFin({ bgcolo }) {
  const currentyear = new Date().getFullYear();
  return (
    <Stack
      sx={{
        bgcolor: "#233033",
        marginLeft: 0,
        marginRight: 0,
        padding: 2,
        margin: -1,
        mt: 3,
      }}
      m={3}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <div>
        <span
          style={{
            color: "#fff",
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
              color: "#fff",
              fontSize: 12,
              marginRight: 5,
            }}
          >
            <GitHub
              fontSize="small"
              sx={{
                ":hover": {
                  color: "#fff",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: 12,
            }}
          >
            <Email
              fontSize="small"
              sx={{
                ":hover": {
                  color: "#fff",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "#fff",
              fontSize: 12,
            }}
          >
            <Telegram
              fontSize="small"
              sx={{
                ":hover": {
                  color: "#fff",
                  cursor: "pointer",
                },
              }}
            />
          </span>
          <span
            style={{
              color: "#fff",
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
              color: "#fff",
              fontSize: 12,
              marginRight: 5,
              ":hover": {
                color: "#fff",
              },
            }}
          >
            Conditions d'utilisation
          </span>
          <span
            style={{
              color: "#fff",
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
