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
        {issues.map((issue, index) =>
          index === 5 ? (
            <>
              <li>
                <button onClick={() => window.open("https://www.wanted.co.kr/")}>
                  <img
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                    alt="광고"
                  ></img>
                </button>
              </li>
              <li key={issue.id}>
                <Link to={`detail/${issue.id}`}>
                  <IssueItem key={issue.id} {...issue} />
                </Link>
              </li>
            </>
          ) : (
            <li key={issue.id}>
              <Link to={`detail/${issue.id}`}>
                <IssueItem key={issue.id} {...issue} />
              </Link>
            </li>
          ),
        )}
      </S.IssueUl>
      {isLast.current ? (
        <S.Wrraper>이슈가 없습니다.</S.Wrraper>
      ) : (
        <S.Wrraper>
          <LoadingSpinner ref={targetRef} />
        </S.Wrraper>
      )}
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
  IssueUl: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default IssueList;
