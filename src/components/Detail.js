import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssueDetail } from "../apis";
import { Loading } from "../styles/error.styles";
import ReactMarkdown from "react-markdown";
import * as s from "../styles/detail.styles";
import isEmpty from "lodash/isEmpty";
import { getDate } from "../utils";

const Detail = () => {
  const [getDetail, setGetDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    result();
  });
  const result = async () => {
    try {
      const result = await getIssueDetail(id);
      setGetDetail(result.data);
    } catch (error) {
      // console.log("error");
    }
  };

  return (
    <>
      {isEmpty(getDetail) ? (
        <Loading>로딩중</Loading>
      ) : (
        <s.Container>
          <s.Main>
            <s.UserInfoWrapper>
              <s.Profile src={getDetail.user.avatar_url} />
              <s.Contents>
                <s.Text>
                  [#{getDetail.number}] {getDetail.title}
                </s.Text>
                <s.Text>작성자: {getDetail.user.login}</s.Text>
                <s.Text>코멘트: {getDetail.comments}</s.Text>
                <s.Text>{getDate(getDetail.created_at)}</s.Text>
              </s.Contents>
            </s.UserInfoWrapper>
            <ReactMarkdown children={getDetail.body} />
          </s.Main>
        </s.Container>
      )}
    </>
  );
};

export default Detail;
