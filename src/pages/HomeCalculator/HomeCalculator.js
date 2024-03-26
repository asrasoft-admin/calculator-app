import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import HomeCalcInputBox from "../../components/HomeCalcInputBox/HomeCalcInputBox";
import TryOurBanner from "../../components/TryOurBanner/TryOurBanner";
import OtherPopularCalc from "../../components/OtherPopularCalcSection/OtherPopularCalc";
import HomeCalc from "../../components/HomeCalc/HomeCalc";
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
          paddingRight: "1.5rem !important",
          paddingBottom: "1em !important",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Grid container>
          <Grid item lg={5} xl={5}>
            <Box>
              <HomeCalcInputBox />
            </Box>
          </Grid>

          <Grid item lg={3} xl={3}>
            <Box
              sx={{
                paddingTop: "1rem !important",
                paddingLeft: "0.99rem !important",
                paddingBottom: "1em !important",
              }}
            >
              <HomeCalc />
            </Box>
          </Grid>

          <Grid item lg={4} xl={4}>
            <Box sx={{ marginTop: "1em !important" }}>
              <OtherPopularCalc />
            </Box>
          </Grid>
        </Grid>
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
