import React from "react";
import Converters from "./Converters/Converters";
import Other from "./Other";

const Directory = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const pageName = params.get("show");

  const DirectoryPage = () => {
    return (
      <div>
        <p>Directory</p>
      </div>
    );
  };

  const renderPage = () => {
    if (pageName === "Converters") {
      return <Converters />;
    } else if (pageName === "Other") {
      return <Other />;
    } else {
      return DirectoryPage();
    }
  };

  return <div>{renderPage()}</div>;
};

export default Directory;
