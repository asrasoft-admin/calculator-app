import React from "react";
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import "./currencyCalculator.css";
import SmallInput from "../../../components/SmallInput/SmallInput";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import styled from "@emotion/styled";
import ReuseableSelect from "../../../components/ReuseableSelect/ReuseableSelect";
import CalculateButton from "../../../components/CalculateButton/CalculateButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "10px",
  },
  "& .MuiInputBase-input": {
    borderRadius: "0.7em !important",
    position: "relative",
    backgroundColor: "var(--card_bg)",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "4px 10px 4px 10px !important",
    width: "140px !important",
    height: "auto",
    marginTop: "10px !important",
    display: "flex !important",
    alignItems: "center !important",
    border: "none !important",
    outline: "none !important",
    color: "var(--app_text_color)",
    // transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "::-webkit-backdrop": {
      textAlign: "center",
    },
    ":focus": {
      backgroundColor: "var(--card_bg)",
    },
  },
}));

const CurrencyCalculator = () => {
  return (
    <div className="CurrencyCalculator_Container">
      <div className="CurrencyCalculator_Head"></div>
      <div className="CurrencyCalculator_Body">
        <Grid container>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <div className="CurrencyCalculator_Main">
              <div>
                <div>
                  <p className="CurrencyCalculator_Text">Currency calculator</p>
                </div>

                <div className="CurrencyCalculator_Desc_Container">
                  Currency calculator allows you to convert between currencies.
                  Exchange between dollars, pounds, euro, yen, yuan, and many
                  more.
                </div>

                <div className="CurrencyCalculator_Box_Container_Main">
                  <div className="CurrencyCalculator_Box_One">
                    <div className="CurrencyCalculator_Box_One_Body_Input_Container">
                      <div className="CurrencyCalculator_Box_One_Body_Input">
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          <AttachMoneyIcon />
                          Dollar
                        </label>
                        <SmallInput className="CurrencyCalculator_SmallInput" />
                      </div>
                      <div className="CurrencyCalculator_Box_One_Body_Input">
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          <CurrencyPoundIcon />
                          Pound
                        </label>
                        <SmallInput className="CurrencyCalculator_SmallInput" />
                      </div>
                      <div className="CurrencyCalculator_Box_One_Body_Input">
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          <CurrencyYenIcon />
                          Yen
                        </label>
                        <SmallInput className="CurrencyCalculator_SmallInput" />
                      </div>
                      <div className="CurrencyCalculator_Box_One_Body_Input">
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          <EuroIcon />
                          Euro
                        </label>
                        <SmallInput className="CurrencyCalculator_SmallInput" />
                      </div>
                      <div className="CurrencyCalculator_Box_One_Body_Input">
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          <CurrencyYuanIcon />
                          Yuan
                        </label>
                        <SmallInput className="CurrencyCalculator_SmallInput" />
                      </div>
                    </div>

                    <div className="CurrencyCalculator_Width">
                      <div>
                        <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                          Amount
                        </label>
                        <SmallInput className="CurrencyCalculator_BigInput" />
                      </div>

                      <ReuseableSelect BootstrapInput={BootstrapInput} />

                      <div className="CurrencyCalculator_Results">
                        <div>
                          <label className="CurrencyCalculator_Box_One_Body_Input_Label">
                            Results
                          </label>
                          <SmallInput className="CurrencyCalculator_BigInput" />
                        </div>

                        <ReuseableSelect BootstrapInput={BootstrapInput} />
                      </div>
                    </div>

                    <div className="CurrencyCalculator_Results">
                      <CalculateButton
                        className="CurrencyCalculator_Calc_Button"
                        instructionsButtonClassName="CurrencyCalculator_Instructions_Button"
                        instructionsButton="Instructions"
                        instructionsButtonContainer="CurrencyCalculator_Instructions_Button_Container"
                      />
                    </div>
                  </div>
                  <div className="CurrencyCalculator_Box_Two">
                    <div>
                      <hr />
                      <p className="CurrencyCalculator_Box_Two_Heading_One">
                        Converters
                      </p>
                      <hr />

                      <div className="CurrencyCalculator_Box_Two_Heading_Two">
                        <ul>
                          <li>
                            <a href="/">Data Size Calculator</a>
                          </li>
                          <li>
                            <a href="/">Temperature calculator</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CurrencyCalculator_Box_Three">
                  <div>
                    <div>
                      <button className="CurrencyCalculator_Box_Three_Button">
                        <PlayArrowIcon className="CurrencyCalculator_Box_Three_Button_Icon" />{" "}
                        Disclaimer
                      </button>
                    </div>
                    <div>
                      <button className="CurrencyCalculator_Box_Three_Button_Two">
                        <PlayArrowIcon className="CurrencyCalculator_Box_Three_Button_Icon" />{" "}
                        Credits
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={0} sm={0}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
