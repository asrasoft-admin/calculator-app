import { Route } from "react-router-dom";
import CurrencyCalculator from "../../pages/OtherPopularCalculators/CurrencyCalculator/CurrencyCalculator";
import FeetAndInchesCalculator from "../../pages/OtherPopularCalculators/FeetAndInchesCalculator/FeetAndInchesCalculator";
import FractionCalculator from "../../pages/OtherPopularCalculators/FractionCalculator/FractionCalculator";
import Converters from "../../pages/HeadersPages/Converters/Converters";
import Financial from "../../pages/HeadersPages/Financial/Financial";
import Fun from "../../pages/HeadersPages/Fun/Fun";
import Health from "../../pages/HeadersPages/Health/Health";
import Math from "../../pages/HeadersPages/Math/Math";
import NewCalculator from "../../pages/HeadersPages/NewCalculator/NewCalculator";
import Other from "../../pages/HeadersPages/Other/Other";
import Sports from "../../pages/HeadersPages/Sports/Sports";
import HomeCalculator from "../../pages/HomeCalculator/HomeCalculator";
import LeaseCalculator from "../../pages/OtherPopularCalculators/LeaseCalculator/LeaseCalculator";
import LoanCalculator from "../../pages/OtherPopularCalculators/LoanCalculator/LoanCalculator";
import LoveCalculator from "../../pages/OtherPopularCalculators/LoveCalculator/LoveCalculator";
import MortgageCalculator from "../../pages/OtherPopularCalculators/MortgageCalculator/MortgageCalculator";
import PercentageCalculator from "../../pages/OtherPopularCalculators/PercentageCalculator/PercentageCalculator";
import ScientificCalculator from "../../pages/OtherPopularCalculators/ScientificCalculator/ScientificCalculator";
import StandardCalculator from "../../pages/OtherPopularCalculators/StandardCalculator/StandardCalculator";
import TemperatureCalculator from "../../pages/OtherPopularCalculators/TemperatureCalculator/TemperatureCalculator";
import TilingCalculator from "../../pages/OtherPopularCalculators/TilingCalculator/TilingCalculator";
import About from "../../pages/FooterPages/About/About";
import Privacy from "../../pages/FooterPages/Privacy/Privacy";
import Terms from "../../pages/FooterPages/Terms/Terms";
import Contact from "../../pages/FooterPages/Contact/Contact";
import Directory from "../../pages/DirectoryPages/Directory";
import AdCalculator from "../../pages/DirectoryPages/Financial/AdCalculator/AdCalculator";
import BondValuation from "../../pages/DirectoryPages/Financial/BondValuation/BondValuation";
import CarLease from "../../pages/DirectoryPages/Financial/CarLease/CarLease";
import MilesperGallonCalculator from "../../pages/DirectoryPages/Financial/MilesperGallonCalculator/MilesperGallonCalculator";
import MoneyCounter from "../../pages/DirectoryPages/Financial/MoneyCounter/MoneyCounter";
import StockCalculator from "../../pages/DirectoryPages/Financial/StockCalculator/StockCalculator";
import StocksVsBonds from "../../pages/DirectoryPages/Financial/StocksVsBonds/StocksVsBonds";
import HomeEquityCalculator from "../../pages/DirectoryPages/FinancialHome/HomeEquityCalculator/HomeEquityCalculator";
import HowMuchHouse from "../../pages/DirectoryPages/FinancialHome/HowMuchHouse/HowMuchHouse";
import RentVersusBuyCalculator from "../../pages/DirectoryPages/FinancialHome/RentVersusBuyCalculator/RentVersusBuyCalculator";
import SimpleMortgagePaymentCalculator from "../../pages/DirectoryPages/FinancialHome/SimpleMortgagePaymentCalculator/SimpleMortgagePaymentCalculator";
import Millionaire from "../../pages/DirectoryPages/FinancialSavings/Millionaire/Millionaire";
import Retirement from "../../pages/DirectoryPages/FinancialSavings/Retirement/Retirement";
import SavingsEstimator from "../../pages/DirectoryPages/FinancialSavings/SavingsEstimator/SavingsEstimator";
import AirportCalculator from "../../pages/DirectoryPages/Other/AirportCalculator/AirportCalculator";
import GroupWorkCalculator from "../../pages/DirectoryPages/Other/GroupWorkCalculator/GroupWorkCalculator";
import RoomSizeCalculator from "../../pages/DirectoryPages/Other/RoomSizeCalculator/RoomSizeCalculator";
import WindChillCalculator from "../../pages/DirectoryPages/Other/WindChillCalculator/WindChillCalculator";
import ArmorPenetrationCalculator from "../../pages/DirectoryPages/Sports&Hobbies/ArmorPenetrationCalculator/ArmorPenetrationCalculator";
import HighPerformanceBass from "../../pages/DirectoryPages/Sports&Hobbies/HighPerformanceBass/HighPerformanceBass";
import HorsepowerCalculator from "../../pages/DirectoryPages/Sports&Hobbies/HorsepowerCalculator/HorsepowerCalculator";
import MilesperHourCalculator from "../../pages/DirectoryPages/Sports&Hobbies/MilesperHourCalculator/MilesperHourCalculator";

export const routesData = [
  // home page route
  { path: "/", component: HomeCalculator },

  // directory page route
  { path: "/directory/", component: Directory },

  // Other Popular Calculators routes
  { path: "/calculate/love/", component: LoveCalculator },
  { path: "/calculate/temperature/", component: TemperatureCalculator },
  { path: "/calculate/percentage/", component: PercentageCalculator },
  { path: "/tape-calculator/", component: StandardCalculator },
  { path: "/fractions/", component: FractionCalculator },
  { path: "/scientific/", component: ScientificCalculator },
  { path: "/calculate/feetinches/", component: FeetAndInchesCalculator },
  { path: "/calculate/tiling/", component: TilingCalculator },
  { path: "/calculate/loan/", component: LoanCalculator },
  { path: "/calculate/mortgage/", component: MortgageCalculator },
  { path: "/calculate/currency/", component: CurrencyCalculator },
  { path: "/calculate/lease/", component: LeaseCalculator },

  // header routes
  { path: "/newcalc/", component: NewCalculator },
  { path: "/Financial/", component: Financial },
  { path: "/Fun/", component: Fun },
  { path: "/Health/", component: Health },
  { path: "/Math/", component: Math },
  { path: "/Sports/", component: Sports },
  { path: "/Converters/", component: Converters },
  { path: "/Other/", component: Other },

  // footer routes
  { path: "/site/about/", component: About },
  { path: "/site/privacy/", component: Privacy },
  { path: "/site/terms/", component: Terms },
  { path: "/site/contact/", component: Contact },

  // directory pages routes

  // Financial pages
  { path: "/calculate/ad/", component: AdCalculator },
  { path: "/calculate/bond/", component: BondValuation },
  { path: "/calculate/lease/", component: CarLease },
  { path: "/calculate/miles-per-gallon/", component: MilesperGallonCalculator },
  { path: "/calculate/money/", component: MoneyCounter },
  { path: "/calculate/stock/", component: StockCalculator },
  { path: "/calculate/stocks-vs-bonds/", component: StocksVsBonds },

  // Financial home pages
  { path: "/calculate/equity/", component: HomeEquityCalculator },
  { path: "/calculate/how-much-house/", component: HowMuchHouse },
  { path: "/calculate/rent_v_buy/", component: RentVersusBuyCalculator },
  {
    path: "/calculate/simple-mortgage/",
    component: SimpleMortgagePaymentCalculator,
  },

  // Financial savings pages
  { path: "/calculate/millionaire/", component: Millionaire },
  { path: "/calculate/retirement/", component: Retirement },
  { path: "/calculate/savings/", component: SavingsEstimator },

  // other pages
  { path: "/calculate/airport/", component: AirportCalculator },
  { path: "/calculate/group-work/", component: GroupWorkCalculator },
  { path: "/calculate/room-size/", component: RoomSizeCalculator },
  { path: "/calculate/wind-chill/", component: WindChillCalculator },

  // Sports & Hobbies pages
  {
    path: "/calculate/armor-penetration/",
    component: ArmorPenetrationCalculator,
  },
  { path: "/calculate/bass-boat-speed/", component: HighPerformanceBass },
  { path: "/calculate/horsepower/", component: HorsepowerCalculator },
  { path: "/calculate/mph/", component: MilesperHourCalculator },
];

export const generateRoutes = () => {
  return routesData.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />} />
  ));
};
