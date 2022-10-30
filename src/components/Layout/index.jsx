import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutHeader } from "@components/Layout/Layout.styled";

const Layout = ({ childeren }) => {
  return (
    <>
      <LayoutHeader>Angular / Angular-cli</LayoutHeader>
      {childeren || <Outlet />}
    </>
  );
};

export default Layout;
