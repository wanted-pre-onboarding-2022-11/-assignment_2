import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <button onClick={() => navigate("/")}>메인으로</button>
    </div>
  );
};

export default Error;
