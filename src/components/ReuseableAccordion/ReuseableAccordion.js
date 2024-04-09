import React from "react";
import "./reuseableAccordion.css";

const ReuseableAccordion = ({ title, subTitle, href }) => {
  return (
    <div className="ReuseableAccordion_Container">
      <a href={href} className="ReuseableAccordion_ContentOne">
        {title}
      </a>
      <p className="ReuseableAccordion_ContentTwo">{subTitle}</p>
    </div>
  );
};

export default ReuseableAccordion;
