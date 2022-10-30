import React, { useCallback, useEffect } from "react";
import { getIssues } from "../../apis";
import { useIssuesDispatch } from "../../context/ProviderHook";

const List = () => {
  // const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const fetchIssues = useCallback(() => {
    getIssues(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  // const { data, loading, error } = state;

  return <div>List</div>;
};

export default List;
