import { Button } from "@mui/material";
import React from "react";

function Butons({
  type,
  onClick,
  disabled,
  icons,
  title,
  width,
  color,
  bgcolor,
  texterror,
}) {
  return (
    <di>
      <Button
        variant="contained"
        type={type}
        sx={{
          mt: 2,
          background: bgcolor ? bgcolor : "#706F6F",
          color: color ? color : "#FFF",
          width: width,
          "&:hover": {
            background: "gray",
          },
          // textTransform: "none",
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {icons}
        {title}
      </Button>
    </di>
  );
}

export default Butons;
