// import { Person } from "@mui/icons-material";
// import { AccountCircle } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import {
  Box,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  // TextField,
} from "@mui/material";
// import { Stack } from "@mui/system";
import React from "react";

function ITextFieldnput({
  label,
  id,
  value,
  onChange,
  multiline,
  placeholder,
  type,
  onBlur,
  invalide,
  error,
  visi,
}) {
  return (
    <Box
      // width={"100%"}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <p style={{
          color:"gray",
          fontSize:14,
          marginTop:-5
        }} >{label}</p>
        <OutlinedInput
          id={id}
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#FFF",
            marginTop: -5,
          }}
          
          // label={label}
          value={value}
          onChange={onChange}
          size="small"
          multiline={multiline}
          rows={3}
          
          // variant="outlined"
          type={type}
          placeholder={placeholder}
          endAdornment={
            visi === true ? (
              <InputAdornment position="end">
                <IconButton>
                  <Visibility
                    sx={{
                      color: "#192C56",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ) : (
              ""
            )
          }
          onBlur={onBlur}
          onInvalid={invalide}
          {...(error && { error: true, heelperText: error })}
        />
      </div>
    </Box>
  );
}

export default ITextFieldnput;