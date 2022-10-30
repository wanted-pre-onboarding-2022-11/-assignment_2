import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIssue } from "@apis";
import {
  IssueDetailContaier,
  IssueInfomation,
  UserAvatar,
} from "@pages/IssueDetail/IssueDetail.styled";
import { Loading } from "../Issues/Issues.styled";
import { convertDay } from "@utils";
import MarkdownPreview from "@uiw/react-markdown-preview";

const IssueDetail = () => {
  const navigate = useNavigate();
  const { issuenumber } = useParams();
  const [issue, setIssue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getIssue(issuenumber)
      .then((res) => {
        if (res.state !== "open") navigate("/error");
        setIssue(res);
        setLoading(false);
      })
      .catch((e) => {
        navigate("/error");
      });
  }, [issuenumber, navigate]);

  if (loading) return <Loading>로딩중...</Loading>;

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
