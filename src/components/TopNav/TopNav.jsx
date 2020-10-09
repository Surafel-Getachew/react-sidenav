import React from "react";
import styles from "./topnav.module.css";
const TopNav = () => {
  return (
    <div className={styles.topNavContainer}>
      <div className={styles.search}>
        <i className="fas fa-search"></i>
        <span>Search...</span>
      </div>
      <div className={styles.profileContainer}>
        <i className="fas fa-bell"></i>
        <div className={styles.aviContainer}>
          <img
            className={styles.avi}
            src={require("../../assets/doctor-thumb-02.jpg")}
          ></img>
        </div>
        <span>Emma watson</span>
      </div>
    </div>
  );
};

export default TopNav;
