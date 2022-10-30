import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => navigate("/", { replace: true })}>메인으로 가기</button>
    </div>
  );
};

export default Error;
