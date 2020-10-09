import React from "react";
import TopNav from "../TopNav/TopNav";
import Navbar from "../Navbar/Navbar";
import styles from "./layout.module.css";
const Layout = (props) => {
  return (
    <div className={styles.Container}>
      <Navbar className={styles.nav} />
      <div className={styles.appContainer}>
        <TopNav />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
