import React, { useEffect } from "react";
import Router from "@routes";
import { getIssueList } from "@apis";
import { IssueListContextProvider } from "@utils";
import { Title } from "@components";

const App = () => {
  useEffect(() => {
    getIssueList().then((res) => res);
  }, []);

  return (
    <IssueListContextProvider>
      <Title>Angular / Angular-cli</Title>
      <Router />
    </IssueListContextProvider>
  );
};

export default App;
