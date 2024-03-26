import React from "react";
import { Box, Typography } from "@mui/material";

const ColorCoding = ({
  label,
  bgColor,
  hoverBgColor,
  icon,
  alignItems,
  lineHeight,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "7px !important",
      }}
    >
      <Typography
        sx={{
          paddingLeft: "5px !important",
          display: "flex",
          alignItems: alignItems,
          lineHeight: lineHeight,
        }}
      >
        <Box>{icon}</Box>
        {label}
      </Typography>
    </Box>
  );
};

export default ColorCoding;
