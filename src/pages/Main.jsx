import React, { useEffect } from "react";

import { getIssues } from "@apis/api";
import { useIssuesState, useIssuesDispatch } from "@utils/IssuesContext";

import IssueItem from "@components/IssueItem";
import useInfiniteScroll from "@hooks/useInfiniteScroll";

import styled from "styled-components";

const Main = () => {
  const { page, setRef } = useInfiniteScroll();

  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issues, loading, error } = state.issues;

  useEffect(() => {
    getIssues(dispatch, page);
  }, [dispatch, page]);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!issues) return null;

  return (
    <StIssuesContainer>
      {issues.map((issue, idx) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          isRef={idx === issues.length - 1 ? setRef : null} //배열의 가장 마지막 요소에 관찰자를 붙입니다.
          isAd={idx === 3} //인덱스가 3일때 true를 반환하여 광고를 띄웁니다.
        />
      ))}
    </StIssuesContainer>
  );
};

const StIssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 0 20px;
`;

export default Main;
