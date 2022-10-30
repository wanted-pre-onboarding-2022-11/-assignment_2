import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getIssue } from "@apis/api";
import { useIssuesDispatch, useIssuesState } from "@utils/IssuesContext";

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

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!issue) return null;

  return (
    <StDetailContainer>
      <StDetailInfo>
        <div>
          <img src={issue.user?.avatar_url} alt="avatar" width="50px" />
        </div>
        <div>
          <div>
            #{issue.number} {issue.title}
          </div>
          <div>
            작성자: {issue.user?.login} {new Date(issue.created_at).toLocaleDateString("ko-KR")}
          </div>
        </div>
        <div>{issue.comments}</div>
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
  padding: 0 20px;
`;

const StDetailInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export default Detail;
