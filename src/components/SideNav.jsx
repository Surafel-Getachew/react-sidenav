import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;
  top: 3.4em;
  background-color: #222;
  overflow-x: hidden;
  postion-top: 10px;
`;

const SideNav = () => {
  const [active, setActive] = useState("/");
  const items = [
    {
      path: "/home",
      name: "Home",
      css: "fas fa-home",
      key: 1,
    },
    {
      path: "/about",
      name: "About",
      css: "fa fa-fw fa-clock",
      key: 2,
    },
    {
      path: "/contacts",
      name: "Contacts",
      css: "fa fa-fw fa-person",
      key: 3,
    },
  ];
  const onItemClick = (path) => {
    setActive(path);
  };
  return (
    <div>
      <StyledSideNav>
        {items.map((item) => (
          <NavItem
            path={item.path}
            name={item.name}
            // css={item.css}
            onItemClick={onItemClick}
            // active={item.path === active}
            key={item.key}
          />
        ))}
      </StyledSideNav>
    </div>
  );
};

export default SideNav;
