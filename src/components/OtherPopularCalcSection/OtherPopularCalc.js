import React from "react";
import { Box, Typography } from "@mui/material";
import "./otherPopularCalc.css";
import CalcTyper from "../CalcTyper/CalcTyper";
import heart from "../../assets/heart.png";
import temp from "../../assets/thermometer.png";
import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";

const data = [
  {
    id: 1,
    name: "Percent calculator",
    bgColor: "#ba4b58",
    img: <Typography sx={{ fontSize: 24 }}>%</Typography>,
    color: "#fff",
    width: "auto",
    filter: "",
    paddingRight: "20px !important",
  },
  {
    id: 2,
    name: "Love calculator",
    bgColor: "#f171ab",
    img: <img src={heart} alt="logo" width={32} />,
    color: "#fff",
    width: "auto",
    filter:
      "invert(100%) sepia(0%) saturate(6781%) hue-rotate(147deg) brightness(102%) contrast(111%)",
    paddingRight: "40px !important",
  },
  {
    id: 3,
    name: "Temperature calculator",
    bgColor: "#ffa502",
    img: <img src={temp} alt="logo" width={32} />,
    color: "#fff",
    width: "50px",
    filter:
      "invert(100%) sepia(0%) saturate(6897%) hue-rotate(194deg) brightness(102%) contrast(111%)",
    paddingRight: "",
  },
];

const OtherPopularCalc = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            backgroundColor: "#e7e7e7",
            padding: "0.2em !important",
            paddingLeft: "0.4em !important",
            fontSize: "1.4em !important",
            color: "#000 !important",
            fontWeight: "600 !important",
            width: "400px !important",
            textAlign: "center",
          }}
        >
          Other popular calculators.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", paddingTop: "40px !important" }}>
        {data.map((item, index) => {
          return (
            <CalcTyper
              key={index}
              calcName={item.name}
              bgColor={item.bgColor}
              img={item.img}
              color={item.color}
              width={item.width}
              filter={item.filter}
              paddingRight={item.paddingRight}
            />
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ViewMoreButton />
      </Box>
    </Box>
  );
};

export default OtherPopularCalc;
