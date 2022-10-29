import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IssuesProvider } from "./contexts/IssuesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <IssuesProvider>
    <App />
  </IssuesProvider>,
  // </React.StrictMode>,
);
