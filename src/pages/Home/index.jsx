import React, { useContext } from "react";
import { IssuesContainer, Notification } from "@pages/Home/Home.styled";
import useInfinityScroll from "@hooks/useInfinityScroll";
import { IssueItem, Error, Loading } from "@components";
import { IssueListContext } from "@/contexts/IssueContext";

const Home = () => {
  const { issueList, isLoading, isEndData, isError, handleNextPage } = useContext(IssueListContext);

  const { obsRef } = useInfinityScroll(isLoading, isEndData, handleNextPage);

  if (isError) return <Error />;

  return (
    <IssuesContainer>
      <div>
        {issueList.map((e, i) => (
          <IssueItem
            key={e.id}
            issuenumber={e.number}
            title={e.title}
            owner={e.user.login}
            createdAt={e.created_at}
            comments={e.comments}
            isAdvertisement={i === 3}
          ></IssueItem>
        ))}
        {isEndData && <Notification>더 이상 불러올 데이터가 없습니다.</Notification>}
        <div ref={obsRef}>{isLoading && <Loading />}</div>
      </div>
    </IssuesContainer>
  );
};

export default Home;
