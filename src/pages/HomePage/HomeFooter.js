import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
// import AdbIcon from '@mui/icons-material/Adb';
import { GitHub, Email, Telegram, YouTube } from "@mui/icons-material";
import imageKali from "../../images/Kali_academy_-_Logo-gris-removebg-preview.png";

function FooterFin({ bgcolo }) {
  // const currentyear = new Date().getFullYear();
  return (
    <div
      style={{
        background: "#233033",
      }}
    >
      <Stack flexDirection={"row"} justifyContent={"center"} p={2}>
        <span
          style={{
            color: "#fff",
            marginRight: 20,
          }}
        >
          <GitHub
            fontSize="medium"
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
            // fontSize: 12,
            marginRight: 20,
          }}
        >
          <Email
            fontSize="medium"
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
            // fontSize: 12,
            marginRight: 20,
          }}
        >
          <Telegram
            fontSize="medium"
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
            // fontSize: 12,
          }}
        >
          <YouTube fontSize="medium" />
        </span>
      </Stack>
      <div
        style={{
          background: "#1F1F1F",
        }}
      >
        <div
          style={{
            margin: 100,
            marginTop: -10,
            marginBottom: 0,
          }}
        >
          <Grid container pb={"5%"}>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <img
                src={imageKali}
                alt="Kali academy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block" /* Supprime l'espace réservé sous l'image */,
                  margin: "0 auto",
                  objectFit: "cover",
                  cursor: "pointer",
                  background: "none",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: 18,
                  color: "gray",
                }}
              >
                Our mission is to activate, connect, and mobilize the largest
                racial equity community in tech to dismantle the structural
                barriers that prevent the full participation and leadership of
                Black and Latinx people in the innovation economy.
              </Typography>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5} ml={5}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  color: "gray",
                  mt: 20,
                }}
              >
                Our mission is to activate, connect, and mobilize the largest
                PROJECT TF dba Code2040, 548 Market St, #27707, San Francisco,
                CA 94104
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  color: "gray",
                  mt: 5,
                  fontStyle: "italic",
                }}
              >
                PROJECT TF, doing business as Code2040, is an exempt
                organization as described in Section 501(c)(3) of the Internal
                Revenue Code. Our EIN is 45-5026246. Copyright (c) 2015
                Code2040, all rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default FooterFin;
