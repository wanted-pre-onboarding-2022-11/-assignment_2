import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>잘못된 접근입니다!</h1>
      <button onClick={() => navigate("/", { replace: true })}>메인으로 가기</button>
    </div>
  );
};

export default Error;
