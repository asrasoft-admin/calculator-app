import React from "react";

const NewCalcImgIcon = ({ src, alt, isText }) => {
  return (
    <button className="NewCalcImgIcon" style={{ padding: "10px !important" }}>
      {isText ? (
        <span className="NewCalcImgIcon_Main">{src}</span>
      ) : (
        <img src={src} alt={alt} className="NewCalcImgIcon_Main_Icon" />
      )}
    </button>
  );
};

export default NewCalcImgIcon;
