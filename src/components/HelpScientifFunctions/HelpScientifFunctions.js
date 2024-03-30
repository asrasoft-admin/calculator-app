import React from "react";
import { Box, Typography } from "@mui/material";
import ColorCoding from "../ColorCoding/ColorCoding";
import HomeAccordion from "../HomeAccordion/HomeAccordion";
import ScientificCalcMenuButton from "../ScientificCalcMenuButton/ScientificCalcMenuButton";

const HelpScientifFunctions = ({ isShowHelpContent, setIsShowHelpContent }) => {
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

  const constantsSection = [
    { id: 1, label: "most common constants" },
    { id: 2, label: "atomic and nuclear constants" },
    { id: 3, label: "electromagnetic constants" },
    { id: 4, label: "physico-chemical constants" },
    { id: 5, label: "universal constants" },
    { id: 6, label: "x-ray constants" },
  ];

  const scientificSection = [
    {
      id: 1,
      label:
        "X^2 is the square of a number or a number times itself. Enter a number, then click x^2.",
      icon: (
        <ScientificCalcMenuButton
          label="x"
          formula="2"
          backgroundColor="#ba4b58"
        />
      ),
      alignItems: "center",
    },
    {
      id: 2,
      label:
        "X! is x factorial. X is a whole number greater than 0. A number in the form 4! is 4x3x2x1 or 24. Enter a number, then click x!",
      icon: <ScientificCalcMenuButton label="x!" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 3,
      label:
        "1/x is the reciprocal of a number and x cannot be zero. Enter a number of the form 0.2 and get 5. Enter a number, then click 1/x.",
      icon: (
        <ScientificCalcMenuButton
          formulaLeft="1"
          label="/x"
          backgroundColor="#ba4b58"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 4,
      label: "x⇄y This button is used to inverse x and y.",
      icon: <ScientificCalcMenuButton label="x⇄y" backgroundColor="#f47c20" />,
      alignItems: "center",
    },
    {
      id: 5,
      label:
        "Base operation is used to set a number as base (i.e. decimal or hexadecimal system). Enter a number, then click base.",
      icon: <ScientificCalcMenuButton label="base" backgroundColor="#f47c20" />,
      alignItems: "flex-start",
    },
    {
      id: 4,
      label:
        "The modulo operation finds the remainder after division of one number by another. The expression, 5 mod 2, would evaluate to 1, because 5 divided by 2 leaves a quotient of 2 and a remainder of 1. Enter a number, then click on MOD, then enter another number, then click equals.",
      icon: <ScientificCalcMenuButton label="mod" backgroundColor="#f47c20" />,
      alignItems: "flex-start",
    },
    {
      id: 5,
      label:
        "Log is the logarithm (exponent) on base 10 of a number. The log of a number of 45 is log 45 and equals 1.653212. Enter a number, then click on Log.",
      icon: <ScientificCalcMenuButton label="log" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 6,
      label:
        "In is natural log or the logarithm (exponent) on base e of a number. The In of a number of 45 is In 45 and equals 3.806662. Enter a number, then click on In.",
      icon: <ScientificCalcMenuButton label="In" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 7,
      label:
        "Lg2 is the logarithm (exponent) on base 2 of a number. The log of the number 45 base 2 is lg2 45 and equals 5.49185. Enter a number, then click on Lg2.",
      icon: <ScientificCalcMenuButton label="lg2" backgroundColor="#ba4b58" />,
      alignItems: "flex-start",
    },
    {
      id: 8,
      label: "Lgy^x you can use this to raise a logarithm to higher power.",
      icon: (
        <ScientificCalcMenuButton
          label="lg"
          subFormula="y"
          formula="x"
          backgroundColor="#f47c20"
        />
      ),
      alignItems: "center",
    },
    {
      id: 9,
      label:
        "Y^x you can use this to raise a number to higher power. Enter a number, then click y^x, then enter another number.",
      icon: (
        <ScientificCalcMenuButton
          label="y"
          formula="x"
          backgroundColor="#f47c20"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 10,
      label:
        "You can use the x-root-of-y button to find any root of a number. Enter a number (y), then click x-root-of-y button, then enter another number (x), and then click equals.",
      icon: (
        <ScientificCalcMenuButton
          label="√"
          formulaLeft="x"
          whyFormula="&nbsp;y"
          isUseExtraStyle
          backgroundColor="#f47c20"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 11,
      label:
        "10^x is 10 raised to the x power (exponent). A number in the form of 10^4 is 10000. Enter a number (exponent), then click 10^x.",
      icon: (
        <ScientificCalcMenuButton
          label="10"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 12,
      label:
        "e^x is e raised to the x power (exponent). A number in the form e^4 is 54.5982. Enter a number (exponent), then click e^x.",
      icon: (
        <ScientificCalcMenuButton
          label="e"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 13,
      label:
        "2^x is 2 raised to the x power (exponent). A number in the form 2^4 is 16. Enter a number, then click 2^x.",
      icon: (
        <ScientificCalcMenuButton
          label="2"
          formula="x"
          backgroundColor="#ba4b58"
        />
      ),
      alignItems: "flex-start",
    },
    {
      id: 14,
      label:
        "The number e is an important mathematical constant that is the base of the natural logarithm. It is approximately equal to 2.71828.",
      icon: <ScientificCalcMenuButton label="e" backgroundColor="#157FCC" />,
      alignItems: "flex-start",
    },
    {
      id: 15,
      label:
        "The number pi is a mathematical constant, the ratio of a circle's circumference to its diameter, approximated as 3.14159.",
      icon: <ScientificCalcMenuButton label="π" backgroundColor="#157FCC" />,
      alignItems: "flex-start",
    },
    {
      id: 16,
      label:
        "Phi represents the golden ratio, two quantities are in a golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. It is approximately 1.61803.",
      icon: <ScientificCalcMenuButton label="φ" backgroundColor="#157FCC" />,
      alignItems: "flex-start",
    },
    {
      id: 17,
      label:
        "You can use the scientific notation button to handle very large numbers, this system makes use of powers of 10, raising 10 to whatever value you need. You can get either really big numbers by using positive powers like 10^5=100000. Or you can get really small numbers by using negative powers like 10^-5=0.00001. e stands for exponent and is used to represent times 10 raised to the power of (x 10^n). For example, if you want the number 100000000 as a scientific notation, you enter 10, then click SN, then 7, and then equals (10eX10^7=100000000).",
      icon: <ScientificCalcMenuButton label="SN" backgroundColor="#575757" />,
      alignItems: "flex-start",
    },
    {
      id: 17,
      label:
        "You can use the parentheses pair to group terms. Every parenthesis you open is numbered, parenthesis levels are indicated by a number in the display box next to the parentheses buttons. This way you can easily know how deep in a parenthesis you are, when the expression is complete there are no parenthses left in the display box. This is used for groupings of the form 4+(9x(15-7)+6). Click the open parenthsis button, enter terms, then click the close parenthesis button.",
      icon: (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ScientificCalcMenuButton label="(" backgroundColor="#575757" />
          <ScientificCalcMenuButton label=")" backgroundColor="#575757" />
        </Box>
      ),
      alignItems: "flex-start",
    },
  ];

  return (
    <Box sx={{ marginTop: "10px !important" }}>
      <HomeAccordion
        title="Help with Scientific functions"
        setIsShowHelpContent={setIsShowHelpContent}
        isShowHelpContent={isShowHelpContent}
      />

      {isShowHelpContent && (
        <Box>
          <Box>
            <HomeAccordion
              title="Views"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ marginTop: "2rem !important" }}>
              <ColorCoding
                alignItems="flex-start"
                label="You can use the view menu button to add fuctionality to the standard calculator.You can add a scientific keypad to calculate logarithms, a trigonometric keypad to calculate angles, and a fraction keypad to form, add, subtract, divide, and multiply fractions.You can also choose to hide the tape."
                icon={
                  <Box sx={{ paddingRight: "0.4rem !important" }}>
                    <button className="Scientific_Calc_ViewDrop_Btn">
                      View
                    </button>
                  </Box>
                }
              />
            </Box>
          </Box>

          <Box>
            <HomeAccordion
              title="Constants"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ marginTop: "0.5rem !important" }}>
              <ColorCoding
                alignItems="center"
                label="You can use the constants menu button to choose between"
                icon={
                  <Box sx={{ paddingRight: "0.4rem !important" }}>
                    <button className="Scientific_Calc_ViewDrop_Btn">
                      Constants
                    </button>
                  </Box>
                }
              />
            </Box>

            <Box>
              {constantsSection.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      marginTop: "0.3rem !important",
                    }}
                  >
                    <a
                      href="/name"
                      style={{
                        color: "rgb(0, 0, 0)",
                      }}
                      className="Scientific_Label"
                    >
                      {item.label}
                    </a>
                    {
                      <Typography>
                        {index === 4 ? ", and" : index === 5 ? "." : ","}
                      </Typography>
                    }
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box>
            <HomeAccordion
              title="Scientific"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ marginTop: "10px !important" }}>
              {scientificSection.map((item, index) => {
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
        </Box>
      )}
    </Box>
  );
};

export default HelpScientifFunctions;
