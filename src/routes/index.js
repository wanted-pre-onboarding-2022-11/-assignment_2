import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PATH from "./paths";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={`${PATH.DETAIL}/:id`} element={<h1>detail</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
