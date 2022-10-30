import instance from "@apis/instance";

export const getIssues = async (dispatch, page) => {
  if (page === 1) {
    dispatch({ type: "GET_ISSUES" });
  }

  try {
    const { data } = await instance.get(`/issues?sort=comments&per_page=20&page=${page}`);
    dispatch({ type: "GET_ISSUES_SUCCESS", data });
  } catch (error) {
    dispatch({ type: "GET_ISSUES_ERROR", error });
  }
};

export const getIssue = async (dispatch, issueNumber) => {
  dispatch({ type: "GET_ISSUE" });
  try {
    const { data } = await instance.get(`/issues/${issueNumber}`);
    dispatch({ type: "GET_ISSUE_SUCCESS", data });
  } catch (error) {
    dispatch({ type: "GET_ISSUE_ERROR", error });
  }
};
