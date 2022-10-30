import React from "react";
import { useNavigate } from "react-router-dom";
import { IssueContainer, AdvertisementContainer } from "@components/IssueItem/IssueItem.styled";
import { convertDay } from "@utils";

const IssueItem = ({ issuenumber, title, owner, createdAt, comments, isAdvertisement }) => {
  const navigate = useNavigate();
  const handleRedirectIssue = () => navigate(`/issue/${issuenumber}`);

  return (
    <>
      <IssueContainer>
        <div>
          <div>
            <button onClick={handleRedirectIssue}>
              #{issuenumber} {title}
            </button>
          </div>
          <div>
            <span>
              작성자: {owner}, 작성일: {convertDay(createdAt)}
            </span>
          </div>
        </div>
        <div>코멘트: {comments}</div>
      </IssueContainer>
      {isAdvertisement && (
        <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
          <AdvertisementContainer>
            <div>광고</div>
          </AdvertisementContainer>
        </a>
      )}
    </>
  );
};

export default IssueItem;
