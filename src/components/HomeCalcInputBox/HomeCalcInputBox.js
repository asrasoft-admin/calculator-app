import React from "react";
import { Box } from "@mui/material";
import "./homeCalcInputBox.css";

const HomeCalcInputBox = () => {
  return (
    <Box
      sx={{
        width: "500px !important",
        height: "300px !important",
        backgroundColor: "#adb1b5",
        display: "flex",
        alignItems: "flex-end",
        borderRadius: "2px !important",
        marginTop: "10px !important",
      }}
    >
      <Box
        sx={{
          width: "100% !important",
          height: "3.3em !important",
          backgroundColor: "#cccccc",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <input placeholder="Enter Label" className="homeCalcInputBoxInput" />
        </Box>
        <Box
          sx={{
            marginTop: "5px !important",
          }}
        >
          <input className="homeCalcInputBoxInputTwo" value={0} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCalcInputBox;
