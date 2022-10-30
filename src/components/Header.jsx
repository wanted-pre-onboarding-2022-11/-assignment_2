import React from "react";

import styled from "styled-components";

const Header = () => {
  return <StHeader>Angular / Angular-cli</StHeader>;
};

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
`;

export default Header;
