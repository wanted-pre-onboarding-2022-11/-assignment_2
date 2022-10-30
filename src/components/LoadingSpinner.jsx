import React, { forwardRef } from "react";
import styled from "styled-components";

const LoadingSpinner = forwardRef((props, ref) => <S.LoadingSpinner ref={ref} />);

const S = {
  LoadingSpinner: styled.div`
    width: 30px;
    height: 30px;
    border: 5px solid #d9d9d9;
    border-radius: 50%;
    border-top-color: #9eb9ec;
    animation: spin 0.8s infinite ease-in-out;
    @keyframes spin {
      to {
        transform: rotate(1turn);
      }
    }
  `,
};
export default LoadingSpinner;
