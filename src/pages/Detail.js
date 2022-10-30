import React from "react";
import { useParams } from "react-router-dom";
import { getIssueById } from "@/apis";
import usePromise from "../hooks/usePromise";
import { Loading } from "@/components/ui";

const Detail = () => {
  const { issueNumber } = useParams();
  const [loading, issue, error] = usePromise(() => getIssueById(issueNumber), []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>데이터를 불러오지 못했어요</h1>;
  }

  const { title, body, assignee, comments, created_at } = issue;

  return (
    <>
      <img width="100px" src={assignee?.avatar_url || ""} alt="user" />
      <div>이슈번호 : {issueNumber}</div>
      <div>제목 : {title}</div>
      <div>댓글 수 : {comments}</div>
      <div>생성 일 : {created_at}</div>
      <div>내용 : {body}</div>
    </>
  );
};

export default Detail;
