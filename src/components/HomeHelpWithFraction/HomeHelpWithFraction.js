import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import HomeAccordion from "../HomeAccordion/HomeAccordion";
import ColorCoding from "../ColorCoding/ColorCoding";

const HomeHelpWithFraction = ({ isShowHelpContent, setIsShowHelpContent }) => {
  const [isChangeFirstSectionButtonColor, setIsChangeFirstSectionButtonColor] =
    useState({ value: "FRA" });
  const [
    isChangeSecondSectionButtonColor,
    setIsChangeSecondSectionButtonColor,
  ] = useState({ value: "FRA" });

  const FunctionButtons = [
    {
      id: 1,
      icon: (
        <Box
          sx={{
            width: "2.9em !important",
            height: "2em !important",
            borderRadius: "30px !important",
            backgroundColor: "#5c5c5c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px !important",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#565656",
            },
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
            /
          </Typography>
        </Box>
      ),
      alignItems: "center",
      name: "/ To enter a fraction of the form 3/4. Click a number and then click fraction bar, then click another number.",
    },
    {
      id: 2,
      icon: (
        <Box
          sx={{
            width: "2.9em !important",
            height: "2em !important",
            borderRadius: "30px !important",
            backgroundColor: "#5c5c5c",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px !important",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#565656",
            },
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
            ↔
          </Typography>
        </Box>
      ),
      alignItems: "flex-start",
      name: "You can use fraction space button to create a number of the form 5 3/4. Enter a number, then click fraction space, click another number and then click on the fraction bar button, lastly enter another number.",
    },
    {
      id: 3,
      icon: (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor:
                isChangeFirstSectionButtonColor.value === "DEC"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px !important",
              cursor: "pointer",
            }}
            onClick={() => setIsChangeFirstSectionButtonColor({ value: "FRA" })}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              DEC
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor:
                isChangeFirstSectionButtonColor.value === "FRA"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px !important",
              cursor: "pointer",
            }}
            onClick={() => setIsChangeFirstSectionButtonColor({ value: "DEC" })}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              FRA
            </Typography>
          </Box>
        </Box>
      ),
      alignItems: "flex-start",
      name: " Decimal format button and Fraction format button work as pair. When you choose the one the other is switched off. Decimal format button is used for all decimal work. Also to change a fraction of the form 3/4 to the decimal 0.75, or a fraction of the form 7/4 or a mixed number of the form 1 3/4 to the decimal 1.75. Click on the decimal format button, enter a fraction or mixed number, then click equals. If the fraction or mixed number is only part of the calculation then omit clicking equals and continue with the calculation per usual. i.e. 3/4 DEC x 6 =. Fraction format button is used to work with all fractions. Also to change a decimal of the form 0.5 to the fraction 1/2, or change a decimal of the form 1.75 to a mixed number of the form 1 3/4 or to the fraction 7/4, or a fraction of the form 7/4 to the mixed number 1 3/4. Click the fraction format button, enter a decimal, click equals and then click on a fraction form and then click equals. If the fraction of decimal is part of a calculation, omit clicking equals and continue with the calculation.",
    },
    {
      id: 4,
      icon: (
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor: "#a0a0a0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px !important",
              cursor: "pointer",
              backgroundColor:
                isChangeSecondSectionButtonColor.value === "DEC"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px !important",
              cursor: "pointer",
            }}
            onClick={() =>
              setIsChangeSecondSectionButtonColor({ value: "FRA" })
            }
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              <span>
                <sup>b</sup>
                /c
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor:
                isChangeSecondSectionButtonColor.value === "FRA"
                  ? "#a0a0a0"
                  : "#d0d0d0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px !important",
              cursor: "pointer",
            }}
            onClick={() =>
              setIsChangeSecondSectionButtonColor({ value: "DEC" })
            }
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px !important",
                fontWeight: "500",
                color: "#444444",
              }}
            >
              <span>
                <sup>a+b</sup>
                /c
              </span>
            </Typography>
          </Box>
        </Box>
      ),
      alignItems: "flex-start",
      name: "Proper fraction button and Improper fraction button work as pair. When you choose the one the other is switched off. Proper fraction button is used to change a number of the form of 9/5 to the form of 1 4/5. A proper fraction is a fraction where the numerator (top number) is less than the denominator (bottom number). Improper fraction button is used to change a number of the form of 1 4/5 to the form of 9/5. An improper fraction is a fraction where the numerator (top number is greater than or equal to the denominator (bottom number).",
    },
  ];
  return (
    <Box sx={{ marginTop: "10px !important" }}>
      <HomeAccordion
        title="Help with Fraction"
        setIsShowHelpContent={setIsShowHelpContent}
        isShowHelpContent={isShowHelpContent}
      />

      {isShowHelpContent && (
        <Box sx={{ paddingTop: "20px !important" }}>
          {FunctionButtons.map((item, index) => {
            return (
              <ColorCoding
                alignItems={item.alignItems}
                key={index}
                label={item.name}
                icon={item.icon}
                lineHeight="2"
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default HomeHelpWithFraction;
