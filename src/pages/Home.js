import React from "react";
import { useContext } from "react";
import { IssueContext } from "../contexts/IssueContext";

const Home = () => {
  const { issues, fetchNextPage } = useContext(IssueContext);

  return (
    <>
      {issues.map((issue) => (
        <li key={issue.id}>{issue.title}</li>
      ))}
      <button onClick={fetchNextPage}>다음 페이지(무한스크롤)</button>
    </>
  );
};

export default Home;
