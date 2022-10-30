import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const IssueItem = ({ issue, isRef, isAd }) => {
  const navigate = useNavigate();

  const handleClickIssue = () => {
    navigate(`/issue/${issue.number}`);
  };

  return (
    <>
      <StIssueItem ref={isRef} onClick={handleClickIssue}>
        <div>
          <div>
            #{issue.number} {issue.title}
          </div>
          <div>
            작성자: {issue.user.login} {new Date(issue.created_at).toLocaleDateString("ko-KR")}
          </div>
        </div>
        <div>{issue.comments}</div>
      </StIssueItem>

      {isAd && (
        <StAd href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="Advertisement"
          />
        </StAd>
      )}
    </>
  );
};

const StIssueItem = styled.div`
  display: flex;
  justify-content: space-between;

  height: 100px;
  border: 1px solid red;
`;

const StAd = styled.a`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
  }
`;

export default IssueItem;
