import React from "react";
import "./calcTyper.css";
import { Box, Typography } from "@mui/material";

const CalcTyper = ({
  calcName,
  bgColor,
  img,
  color,
  width,
  filter,
  paddingRight,
  onClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingRight: paddingRight,
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          backgroundColor: "red",
          fontSize: "18px !important",
          margin: "auto",
          fontWeight: "bold",
          position: "relative",
          backgroundColor: bgColor,
          color: color,
          borderRadius: "1.5em",
          width: "3em",
          height: "3em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          filter: filter,
        }}
      >
        {img}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
        }}
      >
        <Typography
          sx={{
            paddingTop: ".3rem !important",
            textDecoration: "underline !important",
            fontWeight: "500 !important",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          {calcName}
        </Typography>
      </Box>
    </Box>
  );
};

export default CalcTyper;
