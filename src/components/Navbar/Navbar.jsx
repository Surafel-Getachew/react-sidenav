import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavItem from "./NavItem";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();
  // console.log("pathname",pathname);
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);
  console.log("active",active)
  const navItems = [
    {
      name: "Dashboard",
      icon: "fas fa-columns",
      to: "/",
      key: 1,
    },
    {
      name: "Schedule",
      icon: "fas fa-calendar-check",
      to: "/about",
      key: 2,
    },
    {
      name: "Article",
      icon: "fas fa-newspaper",
      to: "/contact",
      key: 3,
    },
    {
      name: "VideoChat",
      icon: "fas fa-video",
      to: "/video",
      key: 4,
    },
    {
      name: "Profile Setting",
      icon: "fas fa-user-cog",
      to: "/profile-setting",
      key: 5,
    },
  ];

  const onItemClick = (path) => {
    setActive(path);
  };

  return (
    <div className={styles.navContainer}>
      <h2 className={styles.logo}>Logo</h2>
      <div className={styles.reg}>Register Patient +</div>
      {navItems.map((item) => (
        <NavItem
          path={item.to}
          name={item.name}
          icon={item.icon}
          key={item.key}
          activ={item.to === active}
          // onclick={onItemClick}
        />
      ))}
      <div className={styles.svgContainer}>
        <img src={require("../../assets/mobile-app.svg")} alt="mobile app" />
        <h6>Download Mobile App</h6>
      </div>
    </div>
  );
};

export default Navbar;
