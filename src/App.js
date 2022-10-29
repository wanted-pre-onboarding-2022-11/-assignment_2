import React, { useEffect } from "react";
import Router from "@routes";
import { getIssueList } from "@apis";
import { IssueListContextProvider } from "@utils";

const App = () => {
  useEffect(() => {
    getIssueList().then((res) => res);
  }, []);

  return (
    <IssueListContextProvider>
      <Router />
    </IssueListContextProvider>
  );
};

export default App;
