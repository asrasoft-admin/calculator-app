import React from "react";
import { Box, Typography } from "@mui/material";

const ScientificCalcMenuButton = ({
  backgroundColor,
  label,
  formula,
  formulaLeft,
  subFormula,
  whyFormula,
  isUseExtraStyle,
}) => {
  return (
    <Box
      sx={{
        width: "2.6em !important",
        height: "1.8em !important",
        borderRadius: "20px !important",
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        marginRight: "4px !important",
        cursor: backgroundColor === "#fff" ? "default" : "pointer",
        ":hover": {
          opacity: 0.9,
        },
      }}
    >
      {formulaLeft && (
        <sup
          style={{
            color: "#fff",
            fontSize: "6px !important",
          }}
        >
          {formulaLeft}
        </sup>
      )}
      <Typography
        sx={{
          color: "#fff",
          fontSize: "16px !important",
          float: isUseExtraStyle ? "left !important" : "",
          marginLeft: isUseExtraStyle ? "-.35em !important" : "",
          paddingTop: isUseExtraStyle ? "12px !important" : "",
        }}
      >
        {label}
        {whyFormula && (
          <span
            style={{
              textDecoration: "overline",
            }}
          >
            {whyFormula}
          </span>
        )}
        {subFormula && <sub>{subFormula}</sub>}
        {formula && <sup>{formula}</sup>}
      </Typography>
    </Box>
  );
};

export default ScientificCalcMenuButton;
