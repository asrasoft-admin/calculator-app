import React from "react";

const NewCalcImgIcon = ({ src, alt, isText }) => {
  return (
    <button className="NewCalculator_Box_TextArea_Main_Icons" style={{ padding: "10px !important" }}>
      {isText ? (
        <span>{src}</span>
      ) : (
        <img src={src} alt={alt} className="NewCalculator_Box_TextArea_Main_Icons_Arrow" />
      )}
    </button>
  );
};

export default NewCalcImgIcon;
