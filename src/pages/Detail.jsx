import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getIssue } from "@apis/api";
import { useIssuesDispatch, useIssuesState } from "@utils/IssuesContext";

import Loading from "@components/Loading";
import Error from "@pages/Error";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import styled from "styled-components";

const Detail = () => {
  const { issueNumber } = useParams();

  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const { data: issue, loading, error } = state.issue;

  useEffect(() => {
    getIssue(dispatch, issueNumber);
  }, [dispatch, issueNumber]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!issue) return null;

  return (
    <StDetailContainer>
      <StDetailInfo>
        <div>
          <img src={issue.user?.avatar_url} alt="avatar" />
        </div>
        <div>
          <StItemTitle>
            <span>#{issue.number}</span>
            <span>{issue.title}</span>
          </StItemTitle>
          <StItemFooter>
            <span>작성자: {issue.user?.login} </span>
            <span>작성일: {new Date(issue.created_at).toLocaleDateString("ko-KR")}</span>
          </StItemFooter>
        </div>
        <div>코멘트: {issue.comments}개</div>
      </StDetailInfo>

      <ReactMarkdown
        children={issue.body}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </StDetailContainer>
  );
};

const StDetailContainer = styled.div`
  padding: 20px;
`;

const StDetailInfo = styled.div`
  display: flex;
  gap: 10px;

  background-color: #fff;
  padding: 10px;
  border-radius: 10px;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;

    width: 15%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 70%;
  }

  & > div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 15%;

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

export default Detail;
