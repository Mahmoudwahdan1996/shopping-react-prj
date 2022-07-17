import React, { useState } from "react";
import classes from "./subMenu.module.css";
const SubMenu = props => {
  return (
    <ul className={`${classes["subMenu"]} ${props.show && classes["show"]}`}>
      {props.children}
    </ul>
  );
};

export default SubMenu;
