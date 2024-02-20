import { Hidden, Stack } from "@mui/material";
import React from "react";
// import { StaticImage } from "gatsby-plugin-image"
import image from "../../images/meetup-nov-1-19.jpeg";

function Mission() {
  return (
    <Stack
      flexDirection={"row"}
      padding={10}
      justifyContent={"space-between"}
      sx={{
        bgcolor: "#00889A",
      }}
    >
      <Stack
        style={{
          width: "50%",
          marginTop: -20,
        }}
      >
        <h1 style={{ color: "#fff" }}>NOTRE MISSION</h1>
        <p
          style={{
            marginTop: -10,
            color: "#fff",
          }}
        >
          Augmenter le nombre de développeurs contributeurs open source dans les
          zones habituellement moins représentées notamment en Afrique
        </p>
      </Stack>
      <Stack
        style={{
          width: "40%",
          //   height: "50%",
          marginTop: -70,
        }}
      >
        <Hidden smDown mdDown>
          <img
            src={image}
            alt="test"
            style={{
              width: 450,
              height: 450,
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
        </Hidden>
      </Stack>
    </Stack>
  );
}

export default Mission;
