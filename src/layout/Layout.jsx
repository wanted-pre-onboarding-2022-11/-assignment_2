import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return <h1>Angular / Angular-cli</h1>;
};
const Layout = ({ childeren }) => {
  return (
    <S.Wrraper>
      <Header />
      {childeren || <Outlet />}
    </S.Wrraper>
  );
};

const S = {
  Wrraper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: "rgb(46, 47, 51)";
    background-color: #f3f3f3;
    box-sizing: border-box;
    width: 100%;
    min-width: 320px;
    max-width: 640px;

    li,
    ul,
    a {
      all: unset;
    }
  `,
};
export default Layout;
