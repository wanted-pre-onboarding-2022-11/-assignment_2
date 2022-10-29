//‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’
export const parseResponseData = (data) => {
  return {
    id: data.id,
    number: data.number,
    title: data.title,
    author: data.login,
    createdAt: data.created_at,
    comments: data.comments,
  };
};

export const parseResponseDatas = (datas) => {
  return datas.map((data) => parseResponseData(data));
};
