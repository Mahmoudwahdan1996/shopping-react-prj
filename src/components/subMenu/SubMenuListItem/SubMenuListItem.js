import React from "react";
import classes from './SubMenuListItem.module.css'
const SubMenuListItem = props => {
  return (
    <li className={`side__bar__item__link ${classes['subMenuItem']}`}>
      <span className={classes['SubMenuItemCircle']}></span>
      <span>{props.children}</span>
    </li>
  );
};

export default SubMenuListItem;
