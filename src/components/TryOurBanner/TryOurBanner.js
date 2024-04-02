import React from "react";
import "./tryOurBanner.css";
import LOGO from "../../assets/label.png";

const TryOurBanner = () => {
  return (
    <div className="TryOurBanner_Container">
      <div className="TryOurBanner_Container_Content">
        <img src={LOGO} alt="label" className="TryOurBanner_IMG" />
        Try our{" "}
        <a className="TryOurBanner_Advanced" href="/newcalc">
          Advanced Scientific calculator (beta).
        </a>
      </div>
    </div>
  );
};

export default TryOurBanner;
