import React, { useState } from "react";
import "./newCalculator.css";
import { Box, Grid, Typography } from "@mui/material";
import OtherPopularCalc from "../../../components/OtherPopularCalcSection/OtherPopularCalc";
import CloseIcon from "@mui/icons-material/Close";
import settingIMG from "../../../../src/assets/settings.svg";
import arrowIMG from "../../../../src/assets/box_arrow.png";
import copyIMG from "../../../../src/assets/copy-icon.svg";
import pastIMG from "../../../../src/assets/paste-icon.svg";
import undoIMG from "../../../../src/assets/undo.svg";
import redoIMG from "../../../../src/assets/redo.svg";
import printerIMG from "../../../../src/assets/printer.svg";
import keyboardIMG from "../../../../src/assets/keyboard.png";
import NewCalcImgIcon from "../../../components/NewCalcImgIcon/NewCalcImgIcon";

const iconsData = [
  { id: 1, icon: copyIMG },
  { id: 2, icon: pastIMG },
  { id: 3, icon: "⇆", isText: true },
  { id: 4, icon: undoIMG, marginLeft: "3rem !important" },
  { id: 5, icon: redoIMG },
  { id: 6, icon: "?", isText: true, marginLeft: "3rem !important" },
  { id: 7, icon: settingIMG, marginLeft: "3rem !important" },
  { id: 8, icon: printerIMG, marginLeft: "3rem !important" },
  { id: 9, icon: keyboardIMG, marginLeft: "3rem !important" },
];

const tabsData = [
  { id: 1, label: "Arithm" },
  { id: 2, label: "Trig" },
  { id: 3, label: "Sta/Prb" },
  { id: 4, label: "Matr" },
  { id: 5, label: "Const" },
];

const NewCalculator = () => {
  const [activeTab, setActiveTab] = useState({ isActive: true, ind: 0 });

  return (
    <div className="NewCalculator_Container">
      <Grid container display="flex" justifyContent="center">
        <Grid item xl={5}>
          <Box>
            <Box className="NewCalculator_Input_Container">
              <Box className="NewCalculator_Input_Content">
                <Box className="NewCalculator_Box">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ marginRight: "10px !important" }}>
                      <b>TIPS</b>
                    </Box>
                    <CloseIcon sx={{ cursor: "pointer", ":hover": { color: "#b5b5b5" } }} />
                  </Box>

                  <Box sx={{ paddingRight: "30px !important" }}>
                    <Typography sx={{ color: "#055160" }}>
                      Press <span className="setting-tip">?</span> to enable help mode and click any button to learn
                      more. Press again to disable.
                    </Typography>
                    <Typography sx={{ paddingTop: "10px !important", color: "#055160" }}>
                      Press{" "}
                      <span className="setting-tip">
                        <img src={settingIMG} className="setting-tip-img" alt="setting" />
                      </span>{" "}
                      for a lot of customizing options.
                    </Typography>
                  </Box>
                </Box>

                <Box className="NewCalculator_Box_TextArea">
                  <Box className="NewCalculator_Box_TextArea_Main_Content">
                    <Box className="NewCalculator_Box_TextArea_Main">
                      <Box className="NewCalculator_Box_TextArea_Main_Two">
                        <textarea
                          x-palm-disable-ste-all="true"
                          autocapitalize="off"
                          autocomplete="off"
                          autocorrect="off"
                          spellcheck="false"
                          className="NewCalculator_TextArea"
                        ></textarea>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    {/* <Box className="NewCalculator_Box_TextArea_Content">
                      <Typography>1</Typography>
                    </Box> */}
                    <Box className="NewCalculator_Box_TextArea_Main_Icons_Container">
                      <button className="NewCalculator_Box_TextArea_Main_Icons">a/b</button>
                      <button className="NewCalculator_Box_TextArea_Main_Icons">DEG</button>
                      <button className="NewCalculator_Box_TextArea_Main_Icons">
                        <img src={arrowIMG} alt="arrow" className="NewCalculator_Box_TextArea_Main_Icons_Arrow" />
                      </button>
                      <span className="NewCalculator_Box_TextArea_Label">
                        <span>1</span>
                      </span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "10px !important",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "0.75em !important",
                  marginLeft: "10px !important",
                }}
              >
                {iconsData.map((item, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        marginLeft: item.marginLeft,
                      }}
                    >
                      <NewCalcImgIcon key={index} src={item.icon} alt="img" isText={item.isText} />
                    </Box>
                  );
                })}
              </Box>

              <Box>
                <ul className="myTab">
                  {tabsData.map((item, index) => {
                    return (
                      <li key={index} className="nav">
                        <button
                          role="tab"
                          className={`tab_button ${
                            activeTab.isActive && activeTab.ind === index ? "isActive" : "isNotActive"
                          }`}
                          onClick={() => setActiveTab({ isActive: true, ind: index })}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={4} display="flex" justifyContent="flex-end" alignItems="center">
          <Box>
            <Box>
              <OtherPopularCalc backgroundColor="#fff" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewCalculator;
