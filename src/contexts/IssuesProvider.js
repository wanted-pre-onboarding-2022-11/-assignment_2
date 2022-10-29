import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import issueInstance from "../apis/issuesInstance";
const initialState = [
  [],
  {
    setNextPage: () => {},
  },
];
const IssuesContext = React.createContext(initialState);

const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const actions = useMemo(
    () => ({
      async setNextPage() {
        const nextPage = await issueInstance.getNextPage();
        setIssues((prev) => [...prev, ...nextPage]);
      },
    }),
    [],
  );
  const value = useMemo(() => [issues, actions], [issues, actions]);

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
};
export { IssuesProvider, IssuesContext };
