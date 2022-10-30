import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import IssueDatail from "../pages/IssueDateil";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="detail/:id" element={<IssueDatail />} />
          <Route path="*" elment={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
