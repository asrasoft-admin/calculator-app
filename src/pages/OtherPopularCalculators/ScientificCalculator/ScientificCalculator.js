import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TryOurBanner from "../../../components/TryOurBanner/TryOurBanner";
import HomeCalcInputBox from "../../../components/HomeCalcInputBox/HomeCalcInputBox";
import HomeCalc from "../../../components/HomeCalc/HomeCalc";
import OtherPopularCalc from "../../../components/OtherPopularCalcSection/OtherPopularCalc";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeHelpAndTips from "../../../components/HomeHelpAndTips/HomeHelpAndTips";
import HomeHelpWithFraction from "../../../components/HomeHelpWithFraction/HomeHelpWithFraction";

const ScientificCalculator = () => {
  const [calculatorValue, setCalculatorValue] = useState("");
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
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xl: "space-around !important",
              lg: "center !important",
              md: "space-around !important",
              sm: "center !important",
              xs: "center !important",
            },
            alignItems: "center",
          }}
        >
          <Grid item lg={5} xl={5} md={6} sm={12} xs={12}>
            <Box>
              <HomeCalcInputBox calculatorValue={calculatorValue} />
            </Box>
          </Grid>

          <Grid item lg={3} xl={3} md={4} sm={12} xs={12}>
            <Box
              sx={{
                paddingTop: "1rem !important",
                paddingLeft: "0.99rem !important",
                paddingBottom: "1em !important",
              }}
            >
              <HomeCalc
                calculatorValue={calculatorValue}
                setCalculatorValue={setCalculatorValue}
                viewBtn={
                  <Box sx={{ paddingRight: "0.1rem !important" }}>
                    <button className="Home_Calc_ViewDrop_Btn">
                      View <ArrowDropDownIcon />
                    </button>
                  </Box>
                }
                constantsBtn={
                  <Box>
                    <button className="Home_Calc_ViewDrop_Btn">
                      Constants <ArrowDropDownIcon />
                    </button>
                  </Box>
                }
                // topButtons={fractionTopButtons}
              />
            </Box>
          </Grid>

          <Grid item lg={4} xl={4} md={5} sm={12} xs={12}>
            <Box sx={{ marginTop: "1em !important" }}>
              {/* other */}
              <OtherPopularCalc />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          paddingRight: "3rem !important",
        }}
      >
        <Box
          sx={{
            width: {
              xl: "65% !important",
              lg: "65% !important",
              md: "65% !important",
              sm: "100%",
              xs: "100%",
            },
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
      </Box>
    </div>
  );
};

export default ScientificCalculator;
