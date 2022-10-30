import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { getIssuesByPage } from "../apis";

const initialIssueState = {
  page: 1,
  issues: [],
  fetchNextPage: () => {
    return;
  },
  loading: false,
  error: null,
};

export const IssueContext = React.createContext(initialIssueState);

export const IssueContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true);
        const data = await getIssuesByPage(page);
        setIssues((prev) => [...prev, ...data]);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData(page);
  }, [page]);

  const contextValue = {
    page,
    issues,
    fetchNextPage,
    loading,
    error,
  };

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
};
