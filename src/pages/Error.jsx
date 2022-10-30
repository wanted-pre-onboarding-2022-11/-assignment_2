import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Error = () => {
  const navigate = useNavigate();

  return (
    <StError>
      <h1>문제가 있네요!</h1>
      <button onClick={() => navigate("/", { replace: true })}>메인으로 가기</button>
    </StError>
  );
};

const StError = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  font-weight: 600;
`;

export default Error;
