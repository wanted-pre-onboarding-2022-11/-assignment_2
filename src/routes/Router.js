import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ROUTH_PATH } from "@routes/routePath";

import Main from "@pages/Main";
import Detail from "@pages/Detail";
import Error from "@pages/Error";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTH_PATH.MAIN} element={<Main />} />
        <Route path={ROUTH_PATH.DETAIL} element={<Detail />} />
        <Route path={ROUTH_PATH.ERROR} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
