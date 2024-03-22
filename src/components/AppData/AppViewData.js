import { Route } from "react-router-dom";
import HomeCalculator from "../../pages/HomeCalculator/HomeCalculator";
import LoveCalculator from "../../pages/LoveCalculator/LoveCalculator";
import PercentageCalculator from "../../pages/PercentageCalculator/PercentageCalculator";
import TemperatureCalculator from "../../pages/TemperatureCalculator/TemperatureCalculator";

export const routesData = [
  { path: "/", component: HomeCalculator },
  { path: "/calculate/love/", component: LoveCalculator },
  { path: "/calculate/temperature/", component: TemperatureCalculator },
  { path: "/calculate/percentage/", component: PercentageCalculator },
];

export const generateRoutes = () => {
  return routesData.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} />
  ));
};
