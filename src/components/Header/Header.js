import React, { useEffect } from "react";
import "./header.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FormControlLabel } from "@mui/material";
import styled from "@emotion/styled";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 57,
  height: 29,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 27,
    height: 27,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 30 / 2,
  },
}));

const Header = () => {
  const options = [
    "Standard Tape calculator",
    "Scientific calculator",
    "Advanced Scientific calculator (beta)",
    "Financial",
    "Fun",
    "Health & Fitness",
    "Math",
    "Sports & Hobbies",
    "Converters",
    "Other",
  ];
  const [isMobile, setIsMobile] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isShowHeaderContent, setIsShowHeaderContent] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  const handleDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const handleLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      handleDarkMode();
    } else {
      handleLightMode();
    }
  };

  const handleMenuItemClick = (event, index) => {
    if (index === 0) {
      window.location.href = "/fractions";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 1) {
      window.location.href = "/scientific";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 2) {
      window.location.href = "/newcalc";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 3) {
      window.location.href = "/directory/?show=Financial";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 4) {
      window.location.href = "/directory/?show=Fun";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 5) {
      window.location.href = "/directory/?show=Health";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 6) {
      window.location.href = "/directory/?show=Math";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 7) {
      window.location.href = "/directory/?show=Sports";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 8) {
      window.location.href = "/directory/?show=Converters";
      setSelectedIndex(index);
      setAnchorEl(null);
    } else if (index === 9) {
      window.location.href = "/directory/?show=Other";
      setSelectedIndex(index);
      setAnchorEl(null);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (selectedTheme === "dark") {
    handleDarkMode();
  }

  const showComponent = () => {
    if (isShowHeaderContent) {
      return (
        <>
          <div>
            <List component="nav" aria-label="Device settings" sx={{ bgcolor: "background.paper", padding: 20 }}>
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <div className="header-drop-down">
                  <p className="header-calc-text">Calculators</p>
                  <ArrowDropDownIcon className="header-arrow-icon" />
                </div>
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{
                    backgroundColor: "#dee2e6",
                    height: option ? 32 : 0,
                    width: 330,
                    paddingLeft: "15px !important",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="header-last-section">
            <p className="header-light">Light</p>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked={selectedTheme === "dark"}
                  onChange={toggleTheme}
                  className="toggle-icon"
                />
              }
              label=""
            />
            <p className="header-dark">Dark</p>
          </div>
        </>
      );
    }
  };

  const showComponentTwo = () => {
    if (!isMobile) {
      return (
        <>
          <div>
            <List component="nav" aria-label="Device settings" sx={{ bgcolor: "background.paper", padding: 20 }}>
              <ListItemButton
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <div className="header-drop-down">
                  <p className="header-calc-text">Calculators</p>
                  <ArrowDropDownIcon className="header-arrow-icon" />
                </div>
              </ListItemButton>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{
                    backgroundColor: "#dee2e6",
                    height: option ? 32 : 0,
                    width: 330,
                    paddingLeft: "15px !important",
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="header-last-section">
            <p className="header-light">Light</p>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  defaultChecked={selectedTheme === "dark"}
                  onChange={toggleTheme}
                  className="toggle-icon"
                />
              }
              label=""
            />
            <p className="header-dark">Dark</p>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <a className="header-a-one" href="/">
        <p className="calc-text">calculator.com</p>
        <span className="calc-text">®</span>
      </a>
      <div className="header-container">
        <a className="header-a" href="/">
          <p className="calc-text">calculator.com</p>
          <span className="calc-text">®</span>
        </a>

        <div>
          <MenuIcon className="header-menuIcon" onClick={() => setIsShowHeaderContent(!isShowHeaderContent)} />
        </div>
      </div>

      {showComponent()}
      {showComponentTwo()}
    </nav>
  );
};

export default Header;
