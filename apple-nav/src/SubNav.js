import React from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";

export const SubNav = () => {
  const MacDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 9px;
    justify-content: space-around;
  `;

  const Price = styled.p`
    font-size: 125px;

    color: black;
    background: red;
  `;

  return (
    <>
      <MacDiv>
        <h1>macPro</h1>
        <h1>macAir</h1>
        <NavLink to="/Mac/macbookpro">MacPro</NavLink>
        <h1>Imac</h1>
        <h1> Mac mini</h1>
        <h1>Accessories</h1>
        <h1>Sierra</h1>
        <h1>Compare</h1>
      </MacDiv>
    </>
  );
};

export const HomePage = () => {
  const H1HomePage = styled.h1`
    display: flex;
    justify-content: space-around;
  `;

  return <H1HomePage>Apple Homepage</H1HomePage>;
};
