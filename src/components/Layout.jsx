import React from "react";

import styled from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.main`
  @media screen and (min-width: 1024px) {
    width: 768px;
  }

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 375px;
  min-height: 100vh;

  background-color: aliceblue;
`;

export default Layout;
