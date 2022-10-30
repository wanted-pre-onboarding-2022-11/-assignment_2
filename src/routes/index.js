import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Issues, IssueDetail } from "@pages";
import ROUTE_PATH from "@routes/routerPaths";
// import { Error } from "@components";
import Layout from "@components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route exact path={ROUTE_PATH.BASE} element={<Issues />} /> */}
          <Route exact path={ROUTE_PATH.BASE} element={<h1>Hello world</h1>} />
          {/* <Route path="detail/:id" element={<IssueDetail />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
