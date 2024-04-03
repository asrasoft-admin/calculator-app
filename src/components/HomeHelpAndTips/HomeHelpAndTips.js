import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HomeAccordion from "../HomeAccordion/HomeAccordion";
import ColorCoding from "../ColorCoding/ColorCoding";
import PrintIcon from "@mui/icons-material/Print";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const colorCodingSectionOne = [
  {
    id: 1,
    name: "Simple number or constant.",
    icon: (
      <Box
        sx={{
          marginRight: "10px !important",
          width: "35px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a6e5",
          },
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Action that involves two numbers (i.e. 6+2).",
    icon: (
      <Box
        sx={{
          marginRight: "10px !important",
          width: "35px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f89b1c",
          },
        }}
      />
    ),
  },
  {
    id: 3,
    name: "Action that requires one number (i.e. 40%).",
    icon: (
      <Box
        sx={{
          marginRight: "10px !important",
          width: "35px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#ba4b58",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#da5867",
          },
        }}
      />
    ),
  },
  {
    id: 4,
    name: "Clears something.",
    icon: (
      <Box
        sx={{
          marginRight: "10px !important",
          width: "35px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#d81b22",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#980c10",
          },
        }}
      />
    ),
  },
];

const colorCodingSectionTwo = [
  {
    id: 1,
    name: "Gives a result.",
    icon: (
      <Box
        sx={{
          width: "35px !important",
          marginRight: "10px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#538018",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#6ea425",
          },
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Actions about the calculator or the tape.",
    icon: (
      <Box
        sx={{
          width: "35px !important",
          marginRight: "10px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#423e3e",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#5c5c5c",
          },
        }}
      />
    ),
  },
  {
    id: 3,
    name: "Number formating actions fractions and scientific notation.",
    icon: (
      <Box
        sx={{
          width: "35px !important",
          marginRight: "10px !important",
          height: "35px !important",
          borderRadius: "100% !important",
          backgroundColor: "#575757",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#5c5c5c",
          },
        }}
      />
    ),
  },
];

const accordionContainerStyle = {
  backgroundColor: "var(--heading_bar_bg) !important",
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
  color: "var(--app_text_color) !important",
};

const ClearingButtonsContent = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "2.9em !important",
          height: "2em !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>C</Typography>
      </Box>
    ),
    name: "Clear button clears the last input.",
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.9em !important",
          height: "2em !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>AC</Typography>
      </Box>
    ),
    name: "All clear button clears the calculator, tape, and resets any functions.",
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.9em !important",
          height: "2em !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>mc</Typography>
      </Box>
    ),
    name: "Memory clear button clears the memory.",
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.9em !important",
          height: "2em !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <EventBusyIcon sx={{ color: "#fff", fontSize: "22px !important" }} />
      </Box>
    ),
    name: "Backspace button clears the last digit.",
  },
];

const memoryButtons = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>mr</Typography>
      </Box>
    ),
    name: "Memory recall button retrieves the number you have in memory and places it in the display field.",
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f99f1b",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>m+</Typography>
      </Box>
    ),
    name: "Memory plus button adds the number displayed to the contents of the memory.",
  },
  {
    id: 3,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f99f1b",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>m-</Typography>
      </Box>
    ),
    name: "Memory minus button subtracts the number displayed from the contents of the memory.",
  },
];

const FunctionButtons = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#ba4b58",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          √<span>&nbsp;</span>
        </Typography>
      </Box>
    ),
    name: "Square root button is used to calculate the square root of a number. Enter a number, then click square root button.",
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#ba4b58",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "10px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>%</Typography>
      </Box>
    ),
    name: "Percent button is used to find the percentage of a number. Enter the percentage amount, click the % button, then enter the number you want the percentage of, and then click equals. i.e. 20% 125 = 25 where 25 is 20% of 125. Note: The percent function will also work if you enter the number first and then the percentage you want i.e. 125 %20 = 25.",
  },
];

const HomeHelpAndTips = ({ isShowHelpContent, setIsShowHelpContent }) => {
  return (
    <Box>
      <HomeAccordion
        title="Help and Tips"
        setIsShowHelpContent={setIsShowHelpContent}
        isShowHelpContent={isShowHelpContent}
      />

      {isShowHelpContent && (
        <Box>
          <HomeAccordion title="Color Coding" containerSx={accordionContainerStyle} contentSx={accordionContentStyle} />

          <Box
            sx={{
              paddingTop: "1.5em !important",
              paddingRight: {
                lg: "0px",
                xl: "0px",
                md: "0px",
                sm: "0px",
                xs: "4.2rem !important",
              },
            }}
          >
            <Grid container spacing={12}>
              <Grid item lg={5}>
                {colorCodingSectionOne.map((item, index) => {
                  return (
                    <ColorCoding
                      alignItems="center"
                      key={index}
                      label={item.name}
                      bgColor={item.bgColor}
                      hoverBgColor={item.hoverBgColor}
                      icon={item.icon}
                    />
                  );
                })}
              </Grid>
              <Grid item lg={6}>
                {colorCodingSectionTwo.map((item, index) => {
                  return (
                    <ColorCoding
                      alignItems="center"
                      key={index}
                      label={item.name}
                      bgColor={item.bgColor}
                      hoverBgColor={item.hoverBgColor}
                      icon={item.icon}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Box>

          <Box>
            <HomeAccordion title="Keyboard" containerSx={accordionContainerStyle} contentSx={accordionContentStyle} />

            <Typography sx={{ paddingTop: "20px !important", color: "var(--app_text_color) !important" }}>
              You can use your numeric keypad to insert numbers along with the keys 'enter', 'equals', 'backspace',
              'delete', as well as the + - * / keys.
            </Typography>
          </Box>

          <Box>
            <HomeAccordion
              title="Tape and Tape Buttons"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Typography sx={{ paddingTop: "6px !important", color: "var(--app_text_color) !important" }}>
              All calculations are saved on the tape. Click on any number or operator on the tape and change it at any
              time. Hit equals and the new result will appear.
            </Typography>

            <Box sx={{ paddingTop: "6px !important" }}>
              <ColorCoding
                alignItems="center"
                label="You can use the print button to print out the tape."
                icon={
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
                    <PrintIcon sx={{ color: "#d7d7d7", fontSize: "22px !important" }} />
                  </Box>
                }
              />
            </Box>
          </Box>

          <Box>
            <HomeAccordion
              title="Clearing Buttons"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ paddingTop: "6px !important" }}>
              {ClearingButtonsContent.map((item, index) => {
                return <ColorCoding alignItems="center" key={index} label={item.name} icon={item.icon} />;
              })}
            </Box>
          </Box>

          <Box>
            <HomeAccordion
              title="Memory Buttons"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ paddingTop: "6px !important" }}>
              {memoryButtons.map((item, index) => {
                return <ColorCoding alignItems="center" key={index} label={item.name} icon={item.icon} />;
              })}
            </Box>
          </Box>

          <Box>
            <HomeAccordion
              title="Function Buttons"
              containerSx={accordionContainerStyle}
              contentSx={accordionContentStyle}
            />

            <Box sx={{ paddingTop: "6px !important" }}>
              {FunctionButtons.map((item, index) => {
                return <ColorCoding alignItems="flex-start" key={index} label={item.name} icon={item.icon} />;
              })}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HomeHelpAndTips;
