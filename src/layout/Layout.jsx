import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return <h1>Angular / Angular-cli</h1>;
};
const Layout = ({ childeren }) => {
  return (
    <>
      <Header />
      {childeren || <Outlet />}
    </>
  );
};

export default Layout;
