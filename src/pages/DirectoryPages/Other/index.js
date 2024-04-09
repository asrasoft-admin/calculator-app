import React from "react";
import { Grid } from "@mui/material";
import ReuseableAccordion from "../../../components/ReuseableAccordion/ReuseableAccordion";
import "./style.css";
import DirectoryAccordion from "../../../components/DirectoryAccordion/DirectoryAccordion";

const Other = () => {
  return (
    <div className="Other_Container">
      <div className="Other_Content_Container">
        <Grid container>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <DirectoryAccordion title="Other" />
            <ReuseableAccordion
              title="Airport Calculator"
              subTitle="This useful calculator will tell you the degrees, Nautical Miles, Statute Miles, and Kilometers between your originating and destination airports. It has a built-in database of over 150 of the most travelled airports!"
              href="/calculate/airport/"
            />
            <ReuseableAccordion
              title="Group Work Calculator"
              subTitle="Ever had to work with another person to complete a task? This calculator will tell you how long it would take two people to complete the task if you know how long it would take each person to complete the task individually."
              href="/calculate/group-work/"
            />
            <ReuseableAccordion
              title="Room Size Calculator"
              subTitle="This calculator allows you to find the approximate room size you will need depending on your room setup and arrangement."
              href="/calculate/room-size/"
            />
            <ReuseableAccordion
              title="Wind Chill Calculator"
              subTitle="Wind Chill is a mysterious and often misunderstood phenomenon. This calculator describes what the wind chill factor really is and offers a form to calculate the wind chill factor when given the air temperature and wind speed."
              href="/calculate/wind-chill/"
            />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Other;
