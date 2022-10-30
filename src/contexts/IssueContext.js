import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import getIssuesByPage from "../apis";

const initialIssueState = {
  page: 1,
  issues: [],
  fetchNextPage: () => {
    return;
  },
};

export const IssueContext = React.createContext(initialIssueState);

export const IssueContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [issues, setIssues] = useState([]);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    getIssuesByPage(page).then((data) => setIssues((prev) => [...prev, ...data]));
  }, [page]);

  const contextValue = {
    page,
    issues,
    fetchNextPage,
  };

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
};
