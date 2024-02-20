import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import ImageVide from "../../images/Notebook-bro.png";

export default function BlogMenuRith() {
  return (
    <div
      style={{
        marginTop: 10,
        padding: 5,
      }}
    >
      <Card>
        <CardContent>
          <Typography fontSize={20} fontWeight={"bold"} textAlign={"center"}>
            Événements tendances
          </Typography>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <img
            src={ImageVide}
            alt="vide le comptenu"
            style={{
              width: 280,
              height: 300,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
