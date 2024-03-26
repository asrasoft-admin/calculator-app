import React from "react";
import { Box } from "@mui/material";
import HomeAccordion from "../HomeAccordion/HomeAccordion";

const HomeHelpWithFraction = ({ isShowHelpContent, setIsShowHelpContent }) => {
  return (
    <Box sx={{ marginTop: "10px !important" }}>
      <HomeAccordion
        title="Help with Fraction"
        setIsShowHelpContent={setIsShowHelpContent}
        isShowHelpContent={isShowHelpContent}
      />

      {isShowHelpContent && <p>dddddd</p>}
    </Box>
  );
};

export default HomeHelpWithFraction;
