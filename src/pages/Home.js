import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IssueContext } from "../contexts/IssueContext";

const Home = () => {
  const navigate = useNavigate();
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef(null);
  const { issues, fetchNextPage } = useContext(IssueContext);

  const handleClickIssue = (id) => {
    navigate(`detail/${id}`);
    setScrollHeight(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo({
      top: scrollHeight,
      behavior: "smooth",
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div ref={containerRef}>
      {issues.map((issue) => (
        <li onClick={handleClickIssue.bind(this, issue.id)} key={issue.id}>
          {issue.title}
        </li>
      ))}
      <button onClick={fetchNextPage}>다음 페이지(무한스크롤)</button>
    </div>
  );
};

export default Home;
