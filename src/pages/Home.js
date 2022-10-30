import React, { useEffect } from "react";
import { useState } from "react";
import getIssuesByPage from "@apis";

const Home = () => {
  //const [page, setPage] = useState(1);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssuesByPage().then((fetchedIssues) => setIssues(fetchedIssues));
  }, []);

  return (
    <>
      <button>다음</button>
      {issues.map((issue) => (
        <li key={issue.id}>{issue.title}</li>
      ))}
    </>
  );
};

export default Home;
