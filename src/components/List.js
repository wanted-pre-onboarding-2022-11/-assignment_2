import React, { useContext } from "react";
import { Context } from "../App";
import { Loading } from "../styles/error.styles";
import * as s from "../styles/list.styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../utils";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();

  let { getLists } = useContext(Context);

  const onClickDetail = (id) => {
    navigate(`/detail/${id}`);
  };
  const onClickBanner = () => {
    navigate("https://www.wanted.co.kr/");
  };
  return (
    <>
      {getLists.length === 0 ? (
        <Loading>
          <div>로딩중</div>
        </Loading>
      ) : (
        <s.Container>
          <s.Main>
            {getLists.map((el, index) => (
              <s.ListWrapper key={uuidv4()}>
                {index === 4 ? (
                  <s.Banner
                    onClick={onClickBanner}
                    src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                  />
                ) : (
                  <s.List
                    onClick={() => {
                      onClickDetail(el.number);
                    }}
                  >
                    <s.Text>
                      [#{el.number}] {el.title}
                    </s.Text>
                    <s.Text>작성자: {el.user.login}</s.Text>
                    <s.Text>코멘트: {el.comments}</s.Text>
                    <s.Text>{getDate(el.created_at)}</s.Text>
                  </s.List>
                )}
              </s.ListWrapper>
            ))}
          </s.Main>
        </s.Container>
      )}
    </>
  );
};

export default List;
