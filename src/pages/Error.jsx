import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  const navigate = useNavigate();
  return (
    <S.Error>
      <h1>ErrorPage 🤢</h1>
      <button onClick={() => navigate("/")}>홈으로</button>
    </S.Error>
  );
};

const S = {
  Error: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
export default Error;
