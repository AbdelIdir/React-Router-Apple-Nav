import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import { Nav } from "./Nav";
import { SubNav, HomePage } from "./SubNav";

export const NavWrapper = () => {
  const Header = styled.header`
    width: 100%;
    height: 200px;
    background: grey;
    color: red;
    display: flex;
    justify-content: space-around;
  `;

  const MacProP = styled.p`
    font-size: 20px;
    padding-left: 50px;
    color: white;
    background: black;
  `;
  return (
    <>
      <Header>
        <Nav />
      </Header>

      <Route
        exact
        path="/Mac"
        render={props => {
          return <SubNav />;
        }}
      />
      <Route
        exact
        path="/Ipad"
        render={props => {
          return <p>This is the Ipad test</p>;
        }}
      />
      <Route
        exact
        path="/Iphone"
        render={props => {
          return <p> This is the Iphone </p>;
        }}
      />
      <Route
        exact
        path="/Watch"
        render={props => {
          return <p>This is the Watch test</p>;
        }}
      />
      <Route
        exact
        path="/TV"
        render={props => {
          return <p>This is the TV test</p>;
        }}
      />
      <Route
        exact
        path="/Music"
        render={props => {
          return <p>This is the Music test</p>;
        }}
      />
      <Route
        exact
        path="/Support"
        render={props => {
          return <p>This is the Support test</p>;
        }}
      />
      <Route
        exact
        path="/Search"
        render={props => {
          return <p>This is the search test</p>;
        }}
      />
      <Route
        exact
        path="/Cart"
        render={props => {
          return <p>This is the cart test</p>;
        }}
      />

      <Route
        exact
        path="/"
        render={props => {
          return <HomePage />;
        }}
      />

      <Route
        path="/Mac/macbookpro"
        render={props => {
          return <MacProP> MacPro Price : 3000$</MacProP>;
        }}
      />
    </>
  );
};
