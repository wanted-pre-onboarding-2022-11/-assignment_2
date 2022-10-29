const IssueItem = ({ title, number, author, createdAt, comments }) => {
  return (
    <>
      <p>{title}</p>
      <p>{number}</p>
      <p>{author}</p>
      <p>{createdAt}</p>
      <p>{comments}</p>
    </>
  );
};

export default IssueItem;
