import React, { useContext } from "react";
import { useMemo } from "react";
import { useState } from "react";
import issueInstance from "../apis/issuesInstance";
// const initialState = [
//   [],
//   {
//     setNextPage: () => {},
//     getIssue: (id) => {},
//   },
// ];
const IssuesValueContext = React.createContext([]);
const IssuesActionsContext = React.createContext();

const useIssuesValue = () => {
  const value = useContext(IssuesValueContext);
  return value;
};

const useIssuesActions = () => {
  const value = useContext(IssuesActionsContext);
  return value;
};
const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const actions = useMemo(
    () => ({
      async setNextPage() {
        const nextPage = await issueInstance.getNextPage();
        setIssues((prev) => [...prev, ...nextPage]);
        return nextPage;
      },

      getIssue(id) {
        const targetIssue = issues.filter((issue) => Number(id, 10) === Number(issue.id, 10));
        if (!targetIssue.length) return [];
        return targetIssue[0];
      },
    }),
    [issues],
  );

  return (
    <IssuesActionsContext.Provider value={actions}>
      <IssuesValueContext.Provider value={issues}>{children}</IssuesValueContext.Provider>
    </IssuesActionsContext.Provider>
  );
};

export { IssuesProvider, useIssuesValue, useIssuesActions };
