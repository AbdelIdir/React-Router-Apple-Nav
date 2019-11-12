import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import { SubNav } from "./SubNav";
export const Nav = () => {
  return (
    <>
      <Link to="/">HOME </Link>
      <Link to="/Mac">MAC</Link>
      <Link to="/Ipad">IPAD</Link>
      <Link to="/Iphone">IPHONE</Link>
      <Link to="/Watch">WATCH</Link>
      <Link to="/TV">TV</Link>
      <Link to="/Music">MUSIC</Link>
      <Link to="/Support">SUPPORT</Link>
      <Link to="/Search">SEARCH</Link>
      <Link to="/Cart">CART</Link>
    </>
  );
};
