import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { issuesAPI } from "@apis/api";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import styled from "styled-components";

const Detail = () => {
  const { issueNumber } = useParams();

  const [issue, setIssue] = useState({});

  const handleGetIssue = useCallback(async () => {
    try {
      const { data } = await issuesAPI.getIssue(issueNumber);
      setIssue(data);
    } catch (error) {
      console.log(error);
    }
  }, [issueNumber]);

  useEffect(() => {
    handleGetIssue();
  }, [handleGetIssue]);

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
