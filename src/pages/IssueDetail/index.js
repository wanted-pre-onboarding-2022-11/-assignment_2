import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getIssue } from "@apis";

const IssueDetail = () => {
  const navigate = useNavigate();
  const { issuenumber } = useParams();

  useEffect(() => {
    getIssue(issuenumber).then((res) => {
      if (res.state !== "open") navigate("/error");
    });
  }, [issuenumber, navigate]);

  return <div></div>;
};

export default IssueDetail;
