import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Container />;
};

export default Loading;

const Container = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(https://static-assets.bamgrid.com/product/disneyplus/images/disney-circular-loader.665d0aa1d24f682fed030803f4e96e2f.png);
  background-size: contain;
  animation: spinner 0.8s ease infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
