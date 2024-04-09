import React from "react";
import { Box, Typography } from "@mui/material";

const DirectoryAccordion = ({ title, containerSx, contentSx }) => {
  return (
    <div>
      <Box
        sx={{
          borderTop: "4px solid var(--directory_headings_bar-bg) !important",
        }}
      >
        <Box
          sx={
            containerSx
              ? containerSx
              : {
                  backgroundColor:
                    "var(--directory_headings_bar-bg) !important",
                  width: "100%",
                  height: "10vh",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "14px !important",
                  marginTop: "10px !important",
                  marginBottom: "10px !important",
                }
          }
        >
          <Typography
            sx={
              contentSx
                ? contentSx
                : {
                    fontSize: "2rem",
                    fontWeight: "500 !important",
                    color: "var(--app_text_color) !important",
                  }
            }
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default DirectoryAccordion;
