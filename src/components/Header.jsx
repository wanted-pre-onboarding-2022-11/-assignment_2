import React from "react";

import styled from "styled-components";

const Header = () => {
  return <StHeader>Angular / Angular-cli</StHeader>;
};

const StHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  background-color: #fff;

  font-size: 24px;
  font-weight: 600;
`;

export default Header;
