import React from "react";
import { Grid } from "@mui/material";
import ReuseableAccordion from "../../../components/ReuseableAccordion/ReuseableAccordion";
import "./converters.css";
import DirectoryAccordion from "../../../components/DirectoryAccordion/DirectoryAccordion";

const Converters = () => {
  return (
    <div className="Converters_Container">
      <div className="Converters_Content_Container">
        <Grid container>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <DirectoryAccordion title="Converters" />
            <ReuseableAccordion
              title="Currency calculator"
              subTitle="Currency calculator allows you to convert between currencies. Exchange
        between dollars, pounds, euro, yen, yuan, and many more."
              href="/calculate/currency/"
            />
            <ReuseableAccordion
              title="Data Size Calculator"
              subTitle="This calculator allows you to calculate data size in bits, nibbles, bytes, kilobytes, megabytes, gigabytes, and terabytes."
              href="/calculate/data-size/"
            />
            <ReuseableAccordion
              title="Temperature calculator"
              subTitle="The temperature calculator allows you to convert temperature degrees between Celsius, Fahrenheit, Kelvin, Rankine, Delisle, Newton, Réaumur and Rømer. Enter a value in any field to see the other values."
              href="/calculate/temperature/"
            />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Converters;
