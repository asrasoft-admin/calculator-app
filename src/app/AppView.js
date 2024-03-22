import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { generateRoutes } from "../components/AppData/AppViewData";

const AppView = () => {
  return (
    <Router>
      <Routes>{generateRoutes()}</Routes>
    </Router>
  );
};

export default AppView;
