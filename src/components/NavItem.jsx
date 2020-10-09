import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItem = (props) => {
  const { active, path, onItemClick, css } = props;
  const StyledNavItem = styled.div`
    border: 2px solid red;
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0; /* Puts space between NavItems */
    a {
      font-size: 2.7em;
      color: white;
      :hover {
        opacity: 0.7;
        text-decoration: none; /* Gets rid of underlining of icons */
      }
    }
  `;
  const handleClick = () => {
    onItemClick(path);
  };
  return (
    <div>
      <StyledNavItem active={active}>
        <Link to={path} className={css} onClick={handleClick}>
          {props.name}
        </Link>
      </StyledNavItem>
    </div>
  );
};

export default NavItem;
