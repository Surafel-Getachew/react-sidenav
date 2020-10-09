import React from "react";
import { Link,useLocation } from "react-router-dom";
import styles from "./navitem.module.css";
const NavItem = (props) => {
  const { name, icon, path, activ, onclick } = props;
  let iconColor;
  activ ? (iconColor = "#703bda") : (iconColor = "#7a7a7a");
  // const handleClick = () => {
  //   onclick(path);
  // };

  
  
  
  return (
    <div className={styles.navItemContainer}>
      <Link className={styles.navItem} to={path}>
        <i
          style={{ color: [iconColor] }}
          className={`${icon} ${styles.iconStyle}`}
        ></i>{" "}
        <span style={{ color: [iconColor] }} className={styles.itemName}>
          {name}
        </span>
      </Link>
    </div>
  );
};

export default NavItem;
