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
          <StItemTitle>
            <span>#{issue.number}</span>
            <span>{issue.title}</span>
          </StItemTitle>
          <StItemFooter>
            <span>작성자: {issue.user.login}</span>
            <span>작성일: {new Date(issue.created_at).toLocaleDateString("ko-KR")}</span>
          </StItemFooter>
        </div>
        <div>코멘트: {issue.comments}개</div>
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
  @media screen and (min-width: 1024px) {
    height: 150px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 75%;
    height: 100%;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 25%;
    height: 100%;

    font-size: 12px;
    text-align: end;
  }
`;

const StItemTitle = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    font-size: 12px;
  }

  span:nth-child(2) {
    margin-top: 5px;
    font-weight: 600;
  }
`;

const StItemFooter = styled.div`
  display: flex;
  gap: 5px;

  span {
    font-size: 12px;
  }
`;

const StAd = styled.a`
  display: flex;
  justify-content: center;

  img {
    width: 50%;
  }
`;

export default IssueItem;
