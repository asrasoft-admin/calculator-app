import React, { useState } from "react";
import { Box } from "@mui/material";
import HomeCalcInputBox from "../../components/HomeCalcInputBox/HomeCalcInputBox";
import TryOurBanner from "../../components/TryOurBanner/TryOurBanner";
import OtherPopularCalc from "../../components/OtherPopularCalcSection/OtherPopularCalc";
import HomeCalc from "../../components/HomeCalc/HomeCalc";
import HomeAccordion from "../../components/HomeAccordion/HomeAccordion";
import HomeHelpAndTips from "../../components/HomeHelpAndTips/HomeHelpAndTips";
import HomeHelpWithFraction from "../../components/HomeHelpWithFraction/HomeHelpWithFraction";

const HomeCalculator = () => {
  const [isShowHelpContent, setIsShowHelpContent] = useState(false);
  const [isShowHelpContentTwo, setIsShowHelpContentTwo] = useState(false);

  return (
    <div>
      <Box>
        <TryOurBanner />
      </Box>

      <Box
        sx={{
          paddingTop: "1rem !important",
          paddingLeft: "0.99rem !important",
          paddingBottom: "1em !important",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <HomeCalcInputBox />
        </Box>

        <Box>
          <HomeCalc />
        </Box>

        <Box sx={{ marginTop: "1em !important" }}>
          <OtherPopularCalc />
        </Box>
      </Box>

      <Box
        sx={{
          width: "65%",
          paddingTop: "1rem !important",
          paddingBottom: "1em !important",
          paddingLeft: "0.99rem !important",
        }}
      >
        <HomeHelpAndTips
          isShowHelpContent={isShowHelpContent}
          setIsShowHelpContent={setIsShowHelpContent}
        />

        <HomeHelpWithFraction
          isShowHelpContent={isShowHelpContentTwo}
          setIsShowHelpContent={setIsShowHelpContentTwo}
        />
      </Box>
    </div>
  );
};

export default HomeCalculator;
