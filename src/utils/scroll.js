import { fetchMoreIssueList } from "../apis";

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    fetchMoreIssueList(2);
  }
};

export default handleScroll;
