import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#dee2e6",
        width: "100% !important",
        height: "250px !important",
        minHeight: "250px !important",
        marginTop: "50px !important",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          clear: "both !important",
          paddingTop: "4em !important",
          lineHeight: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  paddingLeft: 0,
                  fontSize: "19px",
                  fontWeight: "500",
                  position: "relative",
                  top: "21px",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  paddingLeft: 0,
                  fontSize: "19px",
                  fontWeight: "500",
                  position: "relative",
                  top: "21px",
                }}
              >
                Privacy Statement
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  paddingLeft: 0,
                  fontSize: "19px",
                  fontWeight: "500",
                  position: "relative",
                  top: "21px",
                }}
              >
                Terms of Service
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  paddingLeft: 0,
                  fontSize: "19px",
                  fontWeight: "500",
                  position: "relative",
                  top: "21px",
                }}
              >
                Directory
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  cursor: "pointer",
                  paddingLeft: 0,
                  fontSize: "19px",
                  fontWeight: "500",
                  position: "relative",
                  top: "21px",
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Typography>Copyright © calculator.com 1996-2024</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
