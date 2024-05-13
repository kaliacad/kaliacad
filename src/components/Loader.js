import { Skeleton, Stack } from "@mui/material";
import React from "react";
import "../style/loader.css";

function Skeletons() {
  return (
    <Stack
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // background: "red",
        flexDirection: "row",
      }}
    >
      <div className="loader"></div>
    </Stack>
  );
}

export default Skeletons;
