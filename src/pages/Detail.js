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

  // const {
  //   number,
  //   title,
  //   body,
  //   assignee: { avatar_url },
  //   comments,
  //   created_at,
  // } = issue;

  console.log(issue);

  return <div>Detail</div>;
};

export default Detail;
