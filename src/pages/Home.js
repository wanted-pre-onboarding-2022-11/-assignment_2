import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IssueContext } from "@contexts/IssueContext";
import ROUTE_PATH from "@routes/paths";
import { Loading } from "@components/ui";

const Home = () => {
  const navigate = useNavigate();
  const [scrollHeight, setScrollHeight] = useState(0);
  const { issues, fetchNextPage, loading, error } = useContext(IssueContext);

  const handleClickIssue = (issue) => {
    navigate(`${ROUTE_PATH.DETAIL}/${issue.number}`);
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
    //eslint-disable-next-line
  }, []);

  if (error) {
    return <h1>에러가 발생했습니다!</h1>;
  }

  return (
    <div>
      {issues.map((issue) => (
        <li key={issue.id} onClick={handleClickIssue.bind(this, issue)}>
          {issue.title}
        </li>
      ))}
      {loading && <Loading />}
      <button onClick={fetchNextPage}>다음 페이지(무한스크롤)</button>
    </div>
  );
};

export default Home;
