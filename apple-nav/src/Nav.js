import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import { SubNav } from "./SubNav";

export const Nav = () => {
  const NavWrapperDiv = styled.div`
    padding-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;

  return (
    <NavWrapperDiv>
      <NavLink to="/">HOME </NavLink>
      <NavLink to="/Mac">MAC</NavLink>
      <NavLink to="/Ipad">IPAD</NavLink>
      <NavLink to="/Iphone">IPHONE</NavLink>
      <NavLink to="/Watch">WATCH</NavLink>
      <NavLink to="/TV">TV</NavLink>
      <NavLink to="/Music">MUSIC</NavLink>
      <NavLink to="/Support">SUPPORT</NavLink>
      <NavLink to="/Search">SEARCH</NavLink>
      <NavLink to="/Cart">CART</NavLink>
    </NavWrapperDiv>
  );
};
