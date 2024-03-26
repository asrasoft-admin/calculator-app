import React from "react";
import { Box, Typography } from "@mui/material";

const ColorCoding = ({ label, bgColor, hoverBgColor, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "7px !important",
      }}
    >
      <Box>{icon}</Box>
      <Typography sx={{ paddingLeft: "5px !important" }}>{label}</Typography>
    </Box>
  );
};

export default ColorCoding;
