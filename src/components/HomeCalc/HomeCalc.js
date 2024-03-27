import React from "react";
import { Box, Typography } from "@mui/material";
import "./homeCalc.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrintIcon from "@mui/icons-material/Print";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const calcFirstRow = [
  { id: 1, icon: <input value={0} className="Home_Calc_Input" disabled /> },
  {
    id: 2,
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
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          mr
        </Typography>
      </Box>
    ),
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
          userSelect: "none",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f99f1b",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          m+
        </Typography>
      </Box>
    ),
  },
  {
    id: 4,
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
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#f99f1b",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          m-
        </Typography>
      </Box>
    ),
  },
  {
    id: 5,
    icon: (
      <Box
        sx={{
          width: "2em !important",
          height: "2em !important",
          borderRadius: "100% !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          mc
        </Typography>
      </Box>
    ),
  },
];

const calcSecondRow = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "55px !important",
          height: "40px !important",
          borderRadius: "30px !important",
          backgroundColor: "#5c5c5c",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#565656",
          },
        }}
      >
        <PrintIcon sx={{ color: "#d7d7d7", fontSize: "24px !important" }} />
      </Box>
    ),
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          7
        </Typography>
      </Box>
    ),
  },
  {
    id: 3,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          8
        </Typography>
      </Box>
    ),
  },
  {
    id: 4,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          9
        </Typography>
      </Box>
    ),
  },
  {
    id: 5,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#d7a0a7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          // ":hover": {
          //   backgroundColor: "#00a3e1",
          // },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          %
        </Typography>
      </Box>
    ),
  },
  {
    id: 6,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#ba4b58",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          √ <span>&nbsp;</span>
        </Typography>
      </Box>
    ),
  },
];

const calcThirdRow = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "55px !important",
          height: "40px !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "3px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <EventBusyIcon sx={{ color: "#fff", fontSize: "24px !important" }} />
      </Box>
    ),
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          4
        </Typography>
      </Box>
    ),
  },
  {
    id: 3,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          5
        </Typography>
      </Box>
    ),
  },
  {
    id: 4,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          6
        </Typography>
      </Box>
    ),
  },
  {
    id: 5,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          ×
        </Typography>
      </Box>
    ),
  },
  {
    id: 6,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          ÷
        </Typography>
      </Box>
    ),
  },
];

const calcFourthRow = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "55px !important",
          height: "40px !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "3px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#faddde", fontSize: "24px !important" }}>
          C
        </Typography>
      </Box>
    ),
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          1
        </Typography>
      </Box>
    ),
  },
  {
    id: 3,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          2
        </Typography>
      </Box>
    ),
  },
  {
    id: 4,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          3
        </Typography>
      </Box>
    ),
  },
  {
    id: 5,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          +
        </Typography>
      </Box>
    ),
  },
  {
    id: 6,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#f47c20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          –
        </Typography>
      </Box>
    ),
  },
];

const calcFivethRow = [
  {
    id: 1,
    icon: (
      <Box
        sx={{
          width: "55px !important",
          height: "40px !important",
          borderRadius: "30px !important",
          backgroundColor: "#d81b21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "3px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#b51419",
          },
        }}
      >
        <Typography sx={{ color: "#faddde", fontSize: "22px !important" }}>
          AC
        </Typography>
      </Box>
    ),
  },
  {
    id: 2,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          .
        </Typography>
      </Box>
    ),
  },
  {
    id: 3,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "4px !important",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          0
        </Typography>
      </Box>
    ),
  },
  {
    id: 4,
    icon: (
      <Box
        sx={{
          width: "2.5em !important",
          height: "2.5em !important",
          borderRadius: "100% !important",
          backgroundColor: "#157FCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#00a3e1",
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          ±
        </Typography>
      </Box>
    ),
  },
  {
    id: 5,
    icon: (
      <Box
        sx={{
          width: "80px !important",
          height: "40px !important",
          borderRadius: "30px !important",
          backgroundColor: "#acc390",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
          marginRight: "4px !important",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "18px !important" }}>
          =
        </Typography>
      </Box>
    ),
  },
];

const HomeCalc = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xl: "flex-start",
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Box sx={{ paddingRight: "14rem !important" }}>
          <button className="Home_Calc_ViewDrop_Btn">
            View <ArrowDropDownIcon />
          </button>
        </Box>
        <Box sx={{ display: "flex" }}>
          {calcFirstRow.map((item, index) => {
            return <Box key={index}>{item.icon}</Box>;
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px !important",
          }}
        >
          {calcSecondRow.map((item, index) => {
            return <Box key={index}>{item.icon}</Box>;
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px !important",
          }}
        >
          {calcThirdRow.map((item, index) => {
            return <Box key={index}>{item.icon}</Box>;
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px !important",
          }}
        >
          {calcFourthRow.map((item, index) => {
            return <Box key={index}>{item.icon}</Box>;
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "2px !important",
          }}
        >
          {calcFivethRow.map((item, index) => {
            return <Box key={index}>{item.icon}</Box>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCalc;
