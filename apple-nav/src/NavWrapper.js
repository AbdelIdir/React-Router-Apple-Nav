import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";

export const NavWrapper = () => {
  const Header = styled.header`
    width: 100%;
    height: 200px;
    background: grey;
    color: red;
    display:flex;
    justify-content:space-around;
  `;
  return (
    <>
      <Header>

          <Link to ="/" >HOME </Link>
        <Link to="/Mac">MAC</Link>

        <Link to="/Ipad">IPAD</Link>

        <Link to="/Iphone">IPHONE</Link>
        <Link to="/Watch">WATCH</Link>
        <Link to="/TV">TV</Link>
        <Link to="/Music">MUSIC</Link>
        <Link to="/Support">SUPPORT</Link>
        <Link to="/Search">SEARCH</Link>
        <Link to="/Cart">CART</Link>
      </Header>

      <Route exact path="/" />
      <Route
        exact
        path="/Mac"
        render={props => {
          return <p>This is the mac test</p>;
        }}
      />
      <Route
        exact
        path="/Ipad"
        render={props => {
          return <p>This is the Ipad test</p>;
        }}
      />
      <Route exact path="Iphone/"  exact
        path="/Iphone"
        render={props => {
          return <p>Iphone </p>;
        }} />
      <Route exact path="/Watch"  exact
        path="/Watch"
        render={props => {
          return <p>This is the Watch test</p>;
        }} />
      <Route exact path="/TV"  exact
        path="/TV"
        render={props => {
          return <p>This is the TV test</p>;
        }} />
      <Route exact path="/Music"  exact
        path="/Music"
        render={props => {
          return <p>This is the Music test</p>;
        }} />
      <Route exact path="/Support"  exact
        path="/Support"
        render={props => {
          return <p>This is the Support test</p>;
        }} />
      <Route exact path="/Search"  exact
        path="/Search"
        render={props => {
          return <p>This is the search test</p>;
        }} />
      <Route exact path="/Cart"  exact
        path="/Cart"
        render={props => {
          return <p>This is the cart test</p>;
        }} />
    </>
  );
};
