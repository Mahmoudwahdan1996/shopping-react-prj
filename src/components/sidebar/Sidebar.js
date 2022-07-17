import React from "react";
import classes from "./sidebar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import VerticalSplitOutlinedIcon from "@mui/icons-material/VerticalSplitOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RemoveModeratorOutlinedIcon from "@mui/icons-material/RemoveModeratorOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import FormatSizeOutlinedIcon from "@mui/icons-material/FormatSizeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SideBarItem from "../sidebarItem/SideBarItem";
import SidebarHeader from "../sidebarHeader/SidebarHeader";

import { sidebarActions } from "../../store/sideBarSlice";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.sidebar);
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  return (
    <aside
      className={`${classes["side__bar"]}  ${showSidebar && classes["show"]} ${
        theme ? classes["dark"] : ""
      }`}
    >
      {/* aside-title */}
      <ul className={classes["side__brand"]}>
        <li>
          <a>
            <img
              src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
              alt="vuexy-brand"
              className={classes["side__brand__logo"]}
            />
            <h2 className={classes["side__brand__text"]}>vuexy</h2>
          </a>
        </li>
        <li onClick={() => dispatch(sidebarActions.hideSidebar())}>
          {showSidebar ? (
            <CloseIcon
              style={{ color: "#5e50ee", fontSize: "2rem", cursor: "pointer" }}
            />
          ) : (
            <a href="#"></a>
          )}
        </li>
      </ul>
      <ul className={classes["side__bar__navigation"]}>
        <SideBarItem
          icon={
            <HomeOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="dashboard"
          extendable={{
            count: 2,
            className: "info",
            items: ["eCommerce", "Analytics"],
          }}
        />
        <SidebarHeader>apps & pages</SidebarHeader>
        <SideBarItem
          icon={
            <EmailOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="email"
        />
        <SideBarItem
          icon={
            <ChatBubbleOutlineIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="chat"
        />
        <SideBarItem
          icon={
            <PlaylistAddCheckOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="todo"
        />
        <SideBarItem
          icon={
            <CalendarTodayOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="calendar"
        />
        <SideBarItem
          icon={
            <DescriptionOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="invoice"
          extendable={{ items: ["List", "Preview", "Edit", "Add"] }}
        />
        <SideBarItem
          icon={
            <ShoppingCartOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          extendable={{ items: ["Shop", "Details", "Wishlist", "Checkout"] }}
          content="ecommerce"
          active={true}
        />
        <SideBarItem
          icon={
            <PersonOutlineOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="user"
          extendable={{ items: ["List", "View", "Edit"] }}
        />
        <SideBarItem
          icon={
            <InsertDriveFileOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="pages"
          extendable={{
            items: [
              "Authentication",
              "Account Settings",
              "Profile",
              "Faq",
              "Knowledge Base",
              "Pricing",
              "Blog",
              "Mail Templates",
              "Miscellaneous",
            ],
          }}
        />
        <SidebarHeader>user interface</SidebarHeader>
        <SideBarItem
          icon={
            <FormatSizeOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="typography"
        />

        <SideBarItem
          icon={
            <ColorLensOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="colors"
        />
        <SideBarItem
          icon={
            <VisibilityOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="feather"
        />
        <SideBarItem
          icon={
            <CreditCardOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="cards"
          extendable={{
            status: "new",
            items: [
              "Basic",
              "Advance",
              "Statistics",
              "Analytics",
              "Card Actions",
            ],
          }}
        />
        <SideBarItem
          icon={
            <FormatSizeOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="components"
          extendable={{
            items: [
              "Alert",
              "Aspect",
              "Avatar",
              "Badge",
              "BreadCrumb",
              "Button",
              "Button Group",
              "Button Toolbar",
              "Calender",
              "Carousel",
              "Collapse",
              "Dropdown",
              "Embed",
              "Image",
              "List Group",
              "Media Objects",
              "Modal",
              "Nav",
              "Overlay",
              "Pagination",
              "Pagination Nav",
              "Pill",
              "Pill Badge",
              "Popover",
              "Progress",
              "Sidebar",
              "Spinner",
              "Tab",
              "Time",
              "Timeline",
              "Toasts",
              "Tooltip",
            ],
          }}
        />
        <SideBarItem
          icon={
            <AddCircleOutlineOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="extensions"
          extendable={{
            items: [
              "Sweet Alert",
              "Toastification",
              "Slider",
              "Drag & Drop",
              "Tour",
              "Clipboard",
              "Context Menu",
              "Swiper",
            ],
          }}
        />
        <SideBarItem
          icon={
            <ViewQuiltOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="page layout"
          extendable={{
            items: [
              "Collapsed Menu",
              "Layout Boxed",
              "Without Menu",
              "Layout Empty",
              "Layout Blank",
            ],
          }}
        />
        <SidebarHeader>Forms & Tables</SidebarHeader>
        <SideBarItem
          icon={
            <VerticalSplitOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="forms elements"
          extendable={{
            items: [
              "Input",
              "Input Group",
              "Input Mask",
              "Textarea",
              "Auto Suggest",
              "Checkbox",
              "Radio",
              "Switch",
              "Select",
              "Vue Select",
              "Spinbutton",
              "File Input",
              "Quill Editor",
              "Form Datepicker",
              "Form TimePicker",
              "Date Time Picker",
              "Form Rating",
              "Form Tag",
            ],
          }}
        />
        <SideBarItem
          icon={
            <VerticalSplitOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="form layout"
        />
        <SideBarItem
          icon={
            <ViewInArOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="form wizard"
        />
        <SideBarItem
          icon={
            <TaskAltOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="form validation"
        />
        <SideBarItem
          icon={<VerticalSplitOutlinedIcon />}
          content="form repeater"
        />
        <SideBarItem
          icon={
            <SplitscreenOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="BS table"
        />
        <SideBarItem
          icon={
            <AutoAwesomeMosaicOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="good table"
        />
        <SidebarHeader>Charts & Maps</SidebarHeader>
        <SideBarItem
          icon={
            <PieChartOutlineOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="charts"
          extendable={{
            count: 3,
            className: "danger",
            items: ["Apex Chart", "Chartjs", "Echart"],
          }}
        />
        <SideBarItem
          icon={
            <ReceiptLongOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="leaflet"
        />
        <SidebarHeader>Others</SidebarHeader>
        <SideBarItem
          icon={
            <ShieldOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="access control"
        />
        <SideBarItem
          icon={
            <MenuOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="menu levels"
          extendable={{ items: ["Menu Level 2.1", "Menu Level 2.2"] }}
        />
        <SideBarItem
          icon={
            <RemoveModeratorOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="desabled menu"
        />
        <SideBarItem
          icon={
            <SupportOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="raise support"
        />
        <SideBarItem
          icon={
            <FeedOutlinedIcon
              style={{
                color: theme ? "#d0d2d6" : "#625f6e",
                fontSize: "2.5rem",
              }}
            />
          }
          content="documentation"
        />
      </ul>
      <div
        className={`${classes["overlay"]} ${showSidebar && classes["show"]}`}
        onClick={() => dispatch(sidebarActions.hideSidebar())}
      ></div>
    </aside>
  );
};

export default Sidebar;
