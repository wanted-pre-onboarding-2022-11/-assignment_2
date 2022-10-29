import React from "react";
import { useNavigate } from "react-router-dom";

const Issue = ({ issuenumber, title, owner, createdAt, comments, isAdvertisement }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(`/issue/${issuenumber}`);

  return (
    <>
      <div>
        <span>#{issuenumber}</span>
        <button onClick={handleNavigate}>{title}</button>
        <span>
          작성자: {owner}, 작성일: {createdAt} {comments}
        </span>
      </div>
      {isAdvertisement && (
        <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="Advertisement"
          ></img>
        </a>
      )}
    </>
  );
};

export default Issue;
