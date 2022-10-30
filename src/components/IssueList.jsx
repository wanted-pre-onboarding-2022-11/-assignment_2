import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { IssuesContext } from "../contexts/IssuesProvider";
import IssueItem from "./IssueItem";
const IssueList = () => {
  const [issues, actions] = useContext(IssuesContext);
  const getNext = useCallback(async () => {
    actions.setNextPage();
  }, [actions]);

  return (
    <div>
      <p>갯수 : {issues.length}</p>
      <button onClick={getNext}>다음 데이터 가져오기</button>
      <div>
        {issues.map((issue) => (
          <Link key={issue.id} to={`detail/${issue.id}`}>
            <IssueItem key={issue.id} {...issue} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IssueList;
