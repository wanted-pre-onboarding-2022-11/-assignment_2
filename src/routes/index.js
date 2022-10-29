import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Issues, IssueDetail } from "@pages";
import ROUTE_PATH from "@routes/routePaths";
import { Error } from "@components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.BASE} element={<Issues />} />
        <Route path={`${ROUTE_PATH.DETAIL}/:issuenumber`} element={<IssueDetail />} />
        <Route path={ROUTE_PATH.NOT_FOUND} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
