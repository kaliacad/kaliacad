import { Hidden, Stack } from "@mui/material";
import React from "react";
// import { StaticImage } from "gatsby-plugin-image"
import image from "../../images/bgimage2.png";

function Mission() {
  return (
    <Stack flexDirection={"row"} padding={10} justifyContent={"space-between"}>
      <Stack
        style={{
          width: "50%",
          marginTop: -20,
        }}
      >
        <h1>NOTRE MISSION</h1>
        <p
          style={{
            marginTop: -10,
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
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Hidden>
      </Stack>
    </Stack>
  );
}

export default Mission;
