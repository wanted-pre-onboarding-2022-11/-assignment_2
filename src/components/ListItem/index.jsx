import React from "react";
import styled from "styled-components";

function ListItem({ issue }) {
  return (
    <Container>
      <LeftBox>
        <GrayColor>#{issue.number}</GrayColor>
        <Title>{issue.title}</Title>
        <div>
          <SmallFont>작성자 : {issue.user.login}</SmallFont>
        </div>
      </LeftBox>
      <Comment>
        <div>
          <SmallFont>코멘트 수</SmallFont>
          <br />
          <Comments>{issue.comments}</Comments>
        </div>
        <GrayColor>{issue.updated_at}</GrayColor>
      </Comment>
    </Container>
  );
}

export default ListItem;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const LeftBox = styled.div`
  text-align: left;
  width: 25rem;
`;

const GrayColor = styled.span`
  color: #bbb;
  font-size: 0.8rem;
`;

const SmallFont = styled.span`
  font-size: 0.8rem;
`;

const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.5rem;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 15rem;
`;

const Comments = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  line-height: 1.75rem;
  background-color: #ff7559;
  margin-left: auto;
  margin-top: 0.25rem;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
`;
