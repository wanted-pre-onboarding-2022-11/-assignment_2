import React from "react";
import Router from "@routes";
import { IssueListContextProvider } from "@/contexts/IssueContext";

function App() {
  return (
    <IssueListContextProvider>
      <Router />
    </IssueListContextProvider>
  );
}

export default App;
