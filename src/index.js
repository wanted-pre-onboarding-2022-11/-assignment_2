import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IssuesProvider } from "@utils/IssuesContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IssuesProvider>
    <App />
  </IssuesProvider>,
);
