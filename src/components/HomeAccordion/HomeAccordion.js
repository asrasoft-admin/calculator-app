import React from "react";
import { Box, Typography } from "@mui/material";

const HomeAccordion = ({ title, setIsShowHelpContent, isShowHelpContent, containerSx, contentSx }) => {
  return (
    <div>
      <Box
        sx={
          containerSx
            ? containerSx
            : {
                backgroundColor: "var(--accordion_bg) !important",
                width: "100%",
                height: "8vh",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px !important",
                borderRadius: "0.25rem !important",
              }
        }
      >
        <Typography
          sx={
            contentSx
              ? contentSx
              : {
                  textDecoration: "underline",
                  fontSize: "20px",
                  fontWeight: "500 !important",
                  color: "var(--app_text_color) !important",
                  ":hover": {
                    color: "#fff",
                    textDecoration: "none",
                    cursor: "pointer",
                  },
                }
          }
          onClick={() => {
            setIsShowHelpContent && setIsShowHelpContent(!isShowHelpContent);
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default HomeAccordion;
