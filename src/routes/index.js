import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Issues, IssueDetail } from "@pages";
import { Home } from "@pages";
import ROUTE_PATH from "@routes/routerPaths";
// import { Error } from "@components";
import Layout from "@components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path={ROUTE_PATH.BASE} element={<Home />} />
          {/* <Route path="detail/:id" element={<IssueDetail />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
