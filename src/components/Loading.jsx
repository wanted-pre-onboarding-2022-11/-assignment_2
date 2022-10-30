import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <StLoading>Loading...</StLoading>;
};

const StLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-weight: 600;
`;
export default Loading;
