import React, { useCallback, useEffect } from "react";
import { getIssues } from "../../apis";
import ListItem from "@/components/ListItem";
import { useIssuesDispatch, useIssuesState } from "../../context/ProviderHook";
import ADItem from "@/components/ADItem";

const List = () => {
  const dispatch = useIssuesDispatch();
  const state = useIssuesState();

  const fetchIssues = useCallback(() => {
    getIssues(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  const { data, loading, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>불편을 드려 죄송합니다. 서버에 문제가 있는 것 같습니다.</div>;

  return (
    <>
      {data
        .sort((a, b) => b.comments - a.comments)
        .slice(0, 10)
        .map((issue, index) => {
          if (index === 4) {
            return <ADItem key={issue.id} />;
          }
          return <ListItem key={issue.id} issue={issue} />;
        })}
    </>
  );
};

export default List;
