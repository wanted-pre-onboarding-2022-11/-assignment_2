import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContainer } from "@components/Error/Error.styled";

const Error = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <h1>404 NOT FOUND</h1>
      <button onClick={() => navigate("/")}>메인으로</button>
    </ErrorContainer>
  );
};

export default Error;
