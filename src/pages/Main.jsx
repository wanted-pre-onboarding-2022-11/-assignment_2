import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { issuesAPI } from "@apis/api";

import IssueItem from "@components/IssueItem";
import useInfiniteScroll from "@hooks/useInfiniteScroll";

import styled from "styled-components";

const Main = () => {
  const navigate = useNavigate();

  const [issues, setIssues] = useState([]);
  const { page, setRef } = useInfiniteScroll();

  const handleClickIssue = (issueNumber) => {
    navigate(`/issue/${issueNumber}`);
  };

  const handleGetIssues = useCallback(async () => {
    try {
      const { data } = await issuesAPI.getIssues(page);
      setIssues((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    handleGetIssues();
  }, [handleGetIssues]);

  return (
    <StIssuesContainer>
      {issues.map((issue, idx) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          handleClickIssue={handleClickIssue}
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
