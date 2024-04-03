import React from "react";
import { Box } from "@mui/material";
import "./homeCalcInputBox.css";

const HomeCalcInputBox = ({ calculatorValue }) => {
  return (
    <Box
      sx={{
        width: "100% !important",
        height: "300px !important",
        backgroundColor: "var(--home_calc_input_bg)",
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
          backgroundColor: "var(--home_calc_input_bg_Main) !important",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <input placeholder="Enter Label" className="homeCalcInputBoxInput" style={{ width: "92%" }} />
        </Box>
        <Box
          sx={{
            marginTop: "5px !important",
          }}
        >
          <input
            className="homeCalcInputBoxInputTwo"
            style={{ width: "92%" }}
            maxLength={16}
            value={calculatorValue ? calculatorValue : "0"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCalcInputBox;
