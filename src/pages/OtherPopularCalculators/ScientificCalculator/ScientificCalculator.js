import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import TryOurBanner from "../../../components/TryOurBanner/TryOurBanner";
import HomeCalcInputBox from "../../../components/HomeCalcInputBox/HomeCalcInputBox";
import HomeCalc from "../../../components/HomeCalc/HomeCalc";
import OtherPopularCalc from "../../../components/OtherPopularCalcSection/OtherPopularCalc";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeHelpAndTips from "../../../components/HomeHelpAndTips/HomeHelpAndTips";
import HomeHelpWithFraction from "../../../components/HomeHelpWithFraction/HomeHelpWithFraction";
import ScientificCalcMenuButton from "../../../components/ScientificCalcMenuButton/ScientificCalcMenuButton";
import HelpScientifFunctions from "../../../components/HelpScientifFunctions/HelpScientifFunctions";
import "./ScientificCalculator.css";
import HelpTrigonometricFunctions from "../../../components/HelpTrigonometricFunctions/HelpTrigonometricFunctions";

const ScientificCalculator = () => {
  const [calculatorValue, setCalculatorValue] = useState("");
  const [isShowHelpContent, setIsShowHelpContent] = useState(false);
  const [isShowHelpContentTwo, setIsShowHelpContentTwo] = useState(false);
  const [isChangeFirstSectionButtonColor, setIsChangeFirstSectionButtonColor] =
    useState({ value: "GRAD" });
  const [
    isChangeFirstSectionButtonColorTwo,
    setIsChangeFirstSectionButtonColorTwo,
  ] = useState({ value: "RAD" });
  const [isShowHelpContentThree, setIsShowHelpContentThree] = useState(false);
  const [isShowHelpContentFour, setIsShowHelpContentFour] = useState(false);

  const scientificTopButtons = [
    {
      id: 1,
      icon: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor:
                isChangeFirstSectionButtonColor.value === "GRAD" ||
                isChangeFirstSectionButtonColorTwo.value === "GRAD"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              marginRight: "5px !important",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsChangeFirstSectionButtonColor({ value: "RAD" });
              setIsChangeFirstSectionButtonColorTwo({ value: "DEG" });
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              GRAD
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor:
                isChangeFirstSectionButtonColor.value === "RAD" ||
                isChangeFirstSectionButtonColorTwo.value === "RAD"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px !important",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsChangeFirstSectionButtonColor({ value: "GRAD" });
              setIsChangeFirstSectionButtonColorTwo({ value: "DEG" });
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              RAD
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      id: 3,
      icon: (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor: "#a0a0a0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor:
                isChangeFirstSectionButtonColor.value === "DEG" ||
                isChangeFirstSectionButtonColorTwo.value === "DEG"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsChangeFirstSectionButtonColor({ value: "RAD" });
              setIsChangeFirstSectionButtonColorTwo({ value: "GRAD" });
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              DEG
            </Typography>
          </Box>
        </Box>
      ),
    },
  ];

  const scientificMenuButtonsFirstRow = [
    {
      id: 1,
      icon: <ScientificCalcMenuButton label="sin" backgroundColor="#ba4b58" />,
    },
    {
      id: 2,
      icon: <ScientificCalcMenuButton label="cos" backgroundColor="#ba4b58" />,
    },
    {
      id: 3,
      icon: <ScientificCalcMenuButton label="tan" backgroundColor="#ba4b58" />,
    },
    {
      id: 4,
      icon: <ScientificCalcMenuButton label="sinh" backgroundColor="#ba4b58" />,
    },
    {
      id: 5,
      icon: <ScientificCalcMenuButton label="cosh" backgroundColor="#ba4b58" />,
    },
    {
      id: 6,
      icon: <ScientificCalcMenuButton label="tanh" backgroundColor="#ba4b58" />,
    },
    {
      id: 7,
      icon: <ScientificCalcMenuButton label="asin" backgroundColor="#ba4b58" />,
    },
    {
      id: 8,
      icon: <ScientificCalcMenuButton label="acos" backgroundColor="#ba4b58" />,
    },
    {
      id: 9,
      icon: <ScientificCalcMenuButton label="atan" backgroundColor="#ba4b58" />,
    },
    {
      id: 10,
      icon: <ScientificCalcMenuButton label="ash" backgroundColor="#ba4b58" />,
    },
    {
      id: 11,
      icon: <ScientificCalcMenuButton label="ach" backgroundColor="#ba4b58" />,
    },
    {
      id: 12,
      icon: <ScientificCalcMenuButton label="ath" backgroundColor="#ba4b58" />,
    },
    {
      id: 13,
      icon: (
        <ScientificCalcMenuButton
          label="x"
          formula="2"
          backgroundColor="#ba4b58"
        />
      ),
    },
    {
      id: 14,
      icon: <ScientificCalcMenuButton label="x!" backgroundColor="#ba4b58" />,
    },
    {
      id: 15,
      icon: (
        <ScientificCalcMenuButton
          formulaLeft="1"
          label="/x"
          backgroundColor="#ba4b58"
        />
      ),
    },
    {
      id: 16,
      icon: <ScientificCalcMenuButton label="RND" backgroundColor="#ba4b58" />,
    },
    {
      id: 17,
      icon: <ScientificCalcMenuButton label="base" backgroundColor="#f47c20" />,
    },
    {
      id: 18,
      icon: <ScientificCalcMenuButton label="mode" backgroundColor="#f47c20" />,
    },
    {
      id: 19,
      icon: <ScientificCalcMenuButton label="log" backgroundColor="#ba4b58" />,
    },
    {
      id: 21,
      icon: <ScientificCalcMenuButton label="In" backgroundColor="#ba4b58" />,
    },
    {
      id: 22,
      icon: <ScientificCalcMenuButton label="lg2" backgroundColor="#ba4b58" />,
    },
    {
      id: 22,
      icon: (
        <ScientificCalcMenuButton
          label="lg"
          subFormula="y"
          formula="x"
          backgroundColor="#f47c20"
        />
      ),
    },
    {
      id: 24,
      icon: (
        <ScientificCalcMenuButton
          label="y"
          formula="x"
          backgroundColor="#f47c20"
        />
      ),
    },
    {
      id: 25,
      icon: (
        <ScientificCalcMenuButton
          label="√"
          formulaLeft="x"
          whyFormula="&nbsp;y"
          isUseExtraStyle
          backgroundColor="#f47c20"
        />
      ),
    },
    {
      id: 26,
      icon: (
        <ScientificCalcMenuButton
          label="10"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
    },
    {
      id: 27,
      icon: (
        <ScientificCalcMenuButton
          label="e"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
    },
    {
      id: 28,
      icon: (
        <ScientificCalcMenuButton
          label="2"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
    },
    {
      id: 29,
      icon: <ScientificCalcMenuButton label="e" backgroundColor="#157FCC" />,
    },
    {
      id: 30,
      icon: <ScientificCalcMenuButton label="π" backgroundColor="#157FCC" />,
    },
    {
      id: 31,
      icon: <ScientificCalcMenuButton label="φ" backgroundColor="#157FCC" />,
    },
    {
      id: 32,
      icon: <ScientificCalcMenuButton label="SN" backgroundColor="#575757" />,
    },
    {
      id: 33,
      icon: <ScientificCalcMenuButton label="φ" backgroundColor="#fff" />,
    },
    {
      id: 34,
      icon: <ScientificCalcMenuButton label="φ" backgroundColor="#fff" />,
    },
    {
      id: 35,
      icon: <ScientificCalcMenuButton label="(" backgroundColor="#575757" />,
    },
    {
      id: 36,
      icon: <ScientificCalcMenuButton label=")" backgroundColor="#575757" />,
    },
    {
      id: 37,
      icon: <ScientificCalcMenuButton label="φ" backgroundColor="#fff" />,
    },
  ];

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
          <Grid
            item
            lg={5}
            xl={5}
            md={6}
            sm={12}
            xs={12}
            sx={{
              height: {
                xl: "280px !important",
                lg: "280px !important",
                md: "550px !important",
              },
            }}
          >
            <Box>
              <HomeCalcInputBox calculatorValue={calculatorValue} />
            </Box>
          </Grid>

          <Grid
            item
            lg={3}
            xl={3}
            md={4}
            sm={12}
            xs={12}
            sx={{
              height: {
                xl: "280px !important",
                lg: "280px !important",
                md: "550px !important",
              },
            }}
          >
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
                topButtons={scientificTopButtons}
                menuButtons={scientificMenuButtonsFirstRow}
              />
            </Box>
          </Grid>

          <Grid item lg={4} xl={4} md={5} sm={12} xs={12}>
            <Box>
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
            paddingTop: {
              xl: "15rem !important",
              lg: "15rem !important",
              md: "4rem !important",
            },
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

          <HelpScientifFunctions
            isShowHelpContent={isShowHelpContentThree}
            setIsShowHelpContent={setIsShowHelpContentThree}
          />

          <HelpTrigonometricFunctions
            isShowHelpContent={isShowHelpContentFour}
            setIsShowHelpContent={setIsShowHelpContentFour}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ScientificCalculator;
