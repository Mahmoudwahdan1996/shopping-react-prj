import React, { useEffect, useState } from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sideBarSlice";
import { themeActions } from "../../store/themeSlice";

const Navbar = ({windowWidth}) => {
  //   const { showSidebar } = useSelector(state => state.sidebar);
  const dispatch = useDispatch();

  const {theme}=useSelector(state=>state.theme)

  return (
    <nav className={`${classes["nav__bar"]} ${theme ? classes['dark']:'' }`}>
      {windowWidth <= 1300 && (
        <li
          className={classes["nav__bookmark"]}
          onClick={() => dispatch(sidebarActions.showSidebar())}
        >
          <MenuIcon
            style={{
              color: theme? "#d0d2d6" : "#6e6b7b",
              fontSize: "2.4rem",
              cursor: "pointer",
              marginRight: "1.2rem",
            }}
          />
        </li>
      )}
      <ul
        className={`${classes["nav__bookmarks"]} ${
          windowWidth <= 992 && classes["hide"]
        }`}
      >
        <li className={classes["nav__bookmark"]}>
          <a href="#">
            <CalendarTodayOutlinedIcon
              style={{
                color: theme? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
        <li className={classes["nav__bookmark"]}>
          <a href="#">
            <ChatBubbleOutlineIcon
              style={{
                color: theme? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
        <li className={classes["nav__bookmark"]}>
          <a href="#">
            <EmailOutlinedIcon
              style={{
                color: theme? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
        <li className={classes["nav__bookmark"]}>
          <a href="#">
            <PlaylistAddCheckOutlinedIcon
              style={{
                color: theme? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <StarBorderOutlinedIcon
              style={{
                color: "#ff9f43",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
      </ul>
      <ul className={`${classes["nav__admin"]} ${theme ? classes['nav__admin__dark']:'' }`}>
        <li className={classes["nav__admin__lang"]}>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"
              alt="english language"
            />
            <span className={classes["dark__text"]}>English</span>
          </a>
        </li>
        <li className={classes["nav__admin__theme"]}
          onClick={()=>dispatch(themeActions.toggleTheme())}
        >
          <a href="#">
            {theme ? (
              <WbSunnyOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />): (
              <DarkModeOutlinedIcon
                style={{
                  color: theme ? "#d0d2d6" : "#6e6b7b",
                  fontSize: "2.4rem",
                }}
              />
            )}
            
          </a>
        </li>
        <li>
          <a href="#">
            <SearchOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
          </a>
        </li>
        <li className={classes["nav__admin__cart"]}>
          <a href="#">
            <ShoppingCartOutlinedIcon
              style={{
                color:  theme ? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
            <div
              className={`${classes["nav__notifications"]} ${classes["blue"]}`}
            >
              5
            </div>
          </a>
        </li>
        <li className={classes["nav__admin__notifications"]}>
          <a href="#">
            <NotificationsNoneOutlinedIcon
              style={{
                color:  theme ? "#d0d2d6" : "#6e6b7b",
                fontSize: "2.4rem",
              }}
            />
            <div
              className={`${classes["nav__notifications"]} ${classes["red"]}`}
            >
              6
            </div>
          </a>
        </li>
        <li className={classes["nav__admin__info"]}>
          <div className={classes["nav__admin__text"]}>
            <p className={classes["dark__text"]}>john doe</p>
            <p className={classes["dark__text"]}>admin</p>
          </div>
          <div className={classes["nav__admin__img"]}></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
