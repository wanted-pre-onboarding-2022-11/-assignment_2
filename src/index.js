import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IssuesProvider } from "@utils/IssuesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IssuesProvider>
    <App />
  </IssuesProvider>,
);
