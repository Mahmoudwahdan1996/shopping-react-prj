import React from "react";
import classes from './SidebarHeader.module.css'

const SidebarHeader = props => {
  return (
    <li className={classes['side__bar__header']}>
      <span>{props.children}</span>
    </li>
  );
};

export default SidebarHeader;
