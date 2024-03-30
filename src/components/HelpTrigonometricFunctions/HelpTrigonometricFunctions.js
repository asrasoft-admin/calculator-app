import React from "react";
import { Box, Typography } from "@mui/material";
import HomeAccordion from "../HomeAccordion/HomeAccordion";
import ScientificCalcMenuButton from "../ScientificCalcMenuButton/ScientificCalcMenuButton";
import ColorCoding from "../ColorCoding/ColorCoding";

const HelpTrigonometricFunctions = ({
  isShowHelpContent,
  setIsShowHelpContent,
}) => {
  const accordionContainerStyle = {
    backgroundColor: "lightgray",
    width: "100%",
    height: "7vh",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px !important",
    borderRadius: "0.15rem !important",
    marginTop: "10px !important",
  };
  const accordionContentStyle = {
    fontSize: "20px",
    fontWeight: "500 !important",
  };

  const trigonometricSection = [
    {
      id: 1,
      label:
        "You can choose between Gradian, Radian, and Degree unit modes, when you choose one the others are switched off. The gradian (also known as gon) is a unit of plane angle. 1 grad = 1/400 tr = pi/200 rad = 9/10 deg. The radian is the standard unit of angular measure. 1 rad = 1/2pi tr = approx. 57.296 deg = approx. 63.662 grad. The degree is a unit of measurement of plane angle. 1 deg = 1/360 tr = pi/180 rad = 10/9 grad.",
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
              backgroundColor: "#a0a0a0",
              display: "flex",
              justifyContent: "center",
              marginRight: "5px !important",
              alignItems: "center",
              cursor: "pointer",
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
              backgroundColor: "#a0a0a0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px !important",
              cursor: "pointer",
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
          <Box
            sx={{
              width: "2.9em !important",
              height: "2em !important",
              borderRadius: "30px !important",
              backgroundColor: "#a0a0a0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5px !important",
              cursor: "pointer",
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
      alignItems: "flex-start",
    },
    {
      id: 2,
      label:
        "Sine finds the ratio y/r value of an angle. Enter a number, then click sin.",
      icon: <ScientificCalcMenuButton label="sin" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 3,
      label:
        "Cosine finds the ratio x/r value of an angle. Enter a number, then click cos.",
      icon: <ScientificCalcMenuButton label="cos" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 4,
      label:
        "Tangent finds the ratio y/x value of an angle. Enter a number, then click tan.",
      icon: <ScientificCalcMenuButton label="tan" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 5,
      label:
        "Sinh is the hyperbolic sine or sinh value of an angle. Enter a number, then click sinh.",
      icon: <ScientificCalcMenuButton label="sinh" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 6,
      label:
        "Cosh is the hyperbolic cosine or cosh value of an angle. Enter a number, then click cosh.",
      icon: <ScientificCalcMenuButton label="cosh" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 7,
      label:
        "Tanh is the hyperbolilc tangent or tanh value of an angle. Enter a number, then click tanh.",
      icon: <ScientificCalcMenuButton label="tanh" backgroundColor="#ba4b58" />,
      alignItems: "center",
    },
    {
      id: 8,
      label:
        "Asin is arcsine or sin^(-1). It finds the angle between -90 degrees and 90 degrees inclusive or between -pi/2 and pi/2 inclusive, with this sine value. Enter a number, then click asin.",
      icon: <ScientificCalcMenuButton label="asin" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 9,
      label:
        "Acos is arccosine or cos^(-1). It finds the angle between 0 degrees and 180 degrees inclusive or between 0 and pi inclusive, with this cosine value. Enter a number, then click acos.",
      icon: <ScientificCalcMenuButton label="acos" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 10,
      label:
        "Atan is arctangent or tan^(-1). It finds the angle between -90 degrees and 90 degrees inclusive or between -pi/2 and pi/2 inclusive, with this tangent value. Enter a number, then click atan.",
      icon: <ScientificCalcMenuButton label="atan" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 11,
      label:
        "Ash is arc hyperbolic sine, arcsinh or sinh^(-1). It finds the angle with this sh or sinh value. Enter a number, then click ash.",
      icon: <ScientificCalcMenuButton label="ash" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 12,
      label:
        "Ach is arc hyperbolic cosine, arccosh or cosh^(-1). It finds the angle with this ch or cosh value. Enter a number, then click ach.",
      icon: <ScientificCalcMenuButton label="ach" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 13,
      label:
        "Ath is arc hyperbolic tangent, arctanh or tanh^(-1). It finds the angle with this th or tanh value. Enter a number, then click ath.",
      icon: <ScientificCalcMenuButton label="ath" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
  ];

  return (
    <Box sx={{ marginTop: "10px !important" }}>
      <HomeAccordion
        title="Help with Trigonometric functions"
        setIsShowHelpContent={setIsShowHelpContent}
        isShowHelpContent={isShowHelpContent}
      />

      {isShowHelpContent && (
        <Box>
          <HomeAccordion
            title="Trigonometric"
            containerSx={accordionContainerStyle}
            contentSx={accordionContentStyle}
          />
          <Box sx={{ marginTop: "10px !important" }}>
            {trigonometricSection.map((item, index) => {
              return (
                <ColorCoding
                  alignItems={item.alignItems}
                  key={index}
                  label={item.label}
                  icon={item.icon}
                />
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HelpTrigonometricFunctions;
