import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useIssuesActions } from "../contexts/IssuesProvider";
const IssueDatail = () => {
  const { id } = useParams();
  const { getIssue } = useIssuesActions();
  const issue = getIssue(id);

  return (
    <S.IssueDatail>
      {issue.length !== 0 ? (
        <div>
          <S.Title>
            <img src={issue.user.profileImage} alt="profileImage" width={100} />
            <S.TitleDetail>
              <h3>{`#${issue.number} ${issue.title}`}</h3>
              <p>
                작성자: {issue.user.login}, 작성일: {issue.createdAt}
              </p>
            </S.TitleDetail>
            <S.Comments>
              <p>코멘트: {issue.comments}</p>
            </S.Comments>
          </S.Title>
          <ReactMarkdown children={issue.body} />
        </div>
      ) : null}
    </S.IssueDatail>
  );
};

const S = {
  IssueDatail: styled.section`
    padding: 0 1rem;
  `,
  Title: styled.div`
    display: flex;
    gap: 0.4rem;
  `,
  TitleDetail: styled.div``,
  Comments: styled.div`
    min-width: fit-content;
  `,
};

export default IssueDatail;
