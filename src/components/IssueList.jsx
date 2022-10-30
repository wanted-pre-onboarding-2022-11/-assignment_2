import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIssuesActions, useIssuesValue } from "../contexts/IssuesProvider";
import IssueItem from "./IssueItem";
import LoadingSpinner from "./LoadingSpinner";
// import LoadingSpinner from "./LoadingSpinner";

const isLastPage = (data) => {
  return data.length === 0;
};

const IssueList = () => {
  const isLast = useRef(false);
  const observerRef = useRef();
  const targetRef = useRef();

  const issues = useIssuesValue();
  const { setNextPage } = useIssuesActions();

  const onIntersection = useCallback(
    (entries, obsever) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          isLast.current = isLastPage(await setNextPage());
        }
      });
    },
    [setNextPage],
  );

  useEffect(() => {
    if (observerRef.current !== undefined) observerRef.current.disconnect();
    if (!isLast.current) {
      observerRef.current = new IntersectionObserver(onIntersection);
      observerRef.current.observe(targetRef.current);
    }
  }, [onIntersection]);

  return (
    <S.IssueListWrraper>
      <S.IssueUl>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Link to={`detail/${issue.id}`}>
              <IssueItem key={issue.id} {...issue} />
            </Link>
          </li>
        ))}
        {isLast.current ? (
          <S.Wrraper>이슈가 없습니다.</S.Wrraper>
        ) : (
          <S.Wrraper>
            <LoadingSpinner ref={targetRef} />
          </S.Wrraper>
        )}
      </S.IssueUl>
    </S.IssueListWrraper>
  );
};

const S = {
  IssueListWrraper: styled.div``,
  Wrraper: styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.05rem;
    div {
      font-size: 3rem;
    }
  `,
  IssueUl: styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
};

export default IssueList;
