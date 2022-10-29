import React, { useCallback, useContext } from "react";
import { IssuesContext } from "../contexts/IssuesProvider";
import IssueItem from "./IssueItem";
const Sample = () => {
  const [issues, actions] = useContext(IssuesContext);
  const getNext = useCallback(async () => {
    actions.setNextPage();
  }, [actions]);

  return (
    <>
      <h1>angular / Angular-cli</h1>
      <p>갯수 : {issues.length}</p>
      <button onClick={getNext}>다음 데이터 가져오기</button>
      <div>
        {issues.map((issue) => (
          <IssueItem key={issue.id} {...issue} />
        ))}
      </div>
    </>
  );
};

export default Sample;
