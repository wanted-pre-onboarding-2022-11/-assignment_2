import React, { useCallback, useEffect, useState } from "react";
import { getIssueList } from "@apis";

export const IssueListContext = React.createContext({
  issueList: [],
  isLoading: true,
  isEndData: false,
  isError: false,
  handleNextPage: () => {},
});

export const IssueListContextProvider = ({ children }) => {
  const [issueList, setIssueList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isEndData, setEndData] = useState(false);
  const [isError, setError] = useState(false);

  const handleNextPage = () => {
    setPage((prev) => ++prev);
  };

  const handleIssueList = useCallback(() => {
    setLoading(true);
    getIssueList(page)
      .then((res) => {
        setIssueList((prev) => [...prev, ...res]);
        setLoading(false);
        if (res.length === 0) setEndData(true);
      })
      .catch((e) => {
        setError(true);
      });
  }, [page]);

  useEffect(() => {
    handleIssueList();
  }, [handleIssueList]);

  return (
    <IssueListContext.Provider value={{ issueList, isLoading, isEndData, isError, handleNextPage }}>
      {children}
    </IssueListContext.Provider>
  );
};
