import React from "react";
import styled from "styled-components";
const IssueItem = ({ title, number, user, createdAt, comments }) => {
  return (
    <S.Item>
      <S.Title>
        <h1>#{number} </h1>
        <h1>{title}</h1>
      </S.Title>

      <p>작성자 : {user.login}</p>
      <p>{createdAt}</p>
      <p>코멘트 : {comments}</p>
    </S.Item>
  );
};

const S = {
  Item: styled.div`
    h1 {
      font-size: 1rem;
    }
    width: 100%;
    min-width: 500px;
    max-width: 500px;
    height: 100%;
    background-color: #ffff;
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 5px;
  `,
  Title: styled.span`
    display: flex;
    gap: 0.5rem;
  `,
};
export default React.memo(IssueItem);
