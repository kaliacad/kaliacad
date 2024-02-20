import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { listeMenu } from "../../data/Data";

function HomaCenter() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        bgcolor={"#f0f0f0"}
        width={"100%"}
        padding={5}
        justifyContent={"center"}
      >
        <Stack justifyContent={"center"} direction={"row"}>
          <Typography
            fontWeight={"bold"}
            width={"60%"}
            fontSize={25}
            textAlign={"center"}
          >
            NOTRE INFRASTRUCTURE NUMÉRIQUE REPOSE SUR DU TRAVAIL OPEN SOURCE,
            MAIS
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontSize={18} mt={2} width={"70%"}>
            L'open source connait de plus en plus de déséquilibre alarmant. Il y
            a de plus en plus de consomateurs pour (très) peu de contributeurs.
          </Typography>
          <div>
            <ul>
              {listeMenu.map((e) => (
                <li>{e}</li>
              ))}
            </ul>
          </div>
          <Typography fontSize={18} mt={2} width={"70%"}>
            Afin d'éviter l'effondrement de l'infrastructure nous devons entre
            autre multiplier le nombre de contributeurs tel que le propose Nadia
            Eghbal.
          </Typography>
          <Typography fontSize={18} mt={2} width={"70%"}>
            Nous sommes convaincu qu'il est encore possible de retrouver
            l'équilibre. C'est pourquoi nous proposons la solution ci-dessous:
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default HomaCenter;
