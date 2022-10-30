import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIssue } from "@apis";
import {
  IssueDetailContaier,
  IssueInfomation,
  UserAvatar,
  LoadingContainer,
} from "@pages/IssueDetail/IssueDetail.styled";
import { Loading } from "@components";
import { convertDay } from "@utils";
import MarkdownPreview from "@uiw/react-markdown-preview";

const IssueDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [issue, setIssue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIssue(id)
      .then((res) => {
        if (res.state !== "open") navigate("/error");
        setIssue(res);
        setLoading(false);
      })
      .catch((e) => {
        navigate("/error");
      });
  }, [id, navigate]);

  if (loading)
    return (
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    );

  return (
    <IssueDetailContaier>
      <div>
        <IssueInfomation>
          <UserAvatar avatar={issue.user.avatar_url} />
          <div>
            <div>
              #{issue.number} {issue.title}
            </div>
            <div>
              작성자: {issue.user.login}, 작성일: {convertDay(issue.created_at)}
            </div>
          </div>
          <div>코멘트: {issue.comments}</div>
        </IssueInfomation>
      </div>
      <MarkdownPreview source={issue.body} />
    </IssueDetailContaier>
  );
};

export default IssueDetail;
