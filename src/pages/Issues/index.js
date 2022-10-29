import React, { useContext, useRef } from "react";
import { IssueListContext } from "@utils";
import { IssuesContainer } from "@pages/Issues/Issues.styled";
import useInfinityScroll from "@hooks/useInfinityScroll";
import { Issue } from "@components";

const Issues = () => {
  const { issueList, isLoading, isEndData, isError, handleNextPage } = useContext(IssueListContext);

  const obsRef = useRef(null);

  useInfinityScroll(obsRef, isLoading, isEndData, handleNextPage);

  if (isError) return <div>에러가 발생했어요!</div>;

  return (
    <IssuesContainer>
      {issueList.map((e, i) => (
        <Issue
          key={e.id}
          issuenumber={e.number}
          title={e.title}
          owner={e.user.login}
          createdAt={e.created_at}
          comments={e.comments}
          isAdvertisement={i === 3}
        ></Issue>
      ))}
      {isEndData && <div>더 이상 불러올 데이터가 없습니다.</div>}
      <div ref={obsRef}>{isLoading && <div>로딩중...</div>}</div>
    </IssuesContainer>
  );
};

export default Issues;
